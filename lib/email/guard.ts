import { NextResponse } from 'next/server'

const MAX_BODY_BYTES = 20_000
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

// Best-effort, per-instance limiter. Serverless instances don't share memory,
// so this blunts bursts rather than guaranteeing a global limit.
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 5
const hits = new Map<string, number[]>()

export function isRateLimited(request: Request): boolean {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)

  if (hits.size > 1000) {
    hits.forEach((times, key) => {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key)
    })
  }

  return recent.length > MAX_REQUESTS_PER_WINDOW
}

// Single-line, bounded text safe for an email subject header
export function cleanLine(value: unknown, max = 80): string {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max)
}

export function isValidEmail(value: unknown): boolean {
  return typeof value === 'string' && value.length <= 254 && EMAIL_PATTERN.test(value)
}

type GuardResult =
  | { ok: true; body: Record<string, unknown> }
  | { ok: false; response: NextResponse }

export async function readFormBody(
  request: Request,
  requiredFields: string[],
  emailField: string
): Promise<GuardResult> {
  if (isRateLimited(request)) {
    return {
      ok: false,
      response: NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      ),
    }
  }

  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) {
    return {
      ok: false,
      response: NextResponse.json({ message: 'Request too large' }, { status: 413 }),
    }
  }

  let body: unknown
  try {
    body = JSON.parse(raw)
  } catch {
    return {
      ok: false,
      response: NextResponse.json({ message: 'Invalid request' }, { status: 400 }),
    }
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return {
      ok: false,
      response: NextResponse.json({ message: 'Invalid request' }, { status: 400 }),
    }
  }

  const data = body as Record<string, unknown>
  const missing = requiredFields.some(
    (field) => typeof data[field] !== 'string' || !(data[field] as string).trim()
  )
  if (missing || !isValidEmail(data[emailField])) {
    return {
      ok: false,
      response: NextResponse.json({ message: 'Invalid or missing fields' }, { status: 400 }),
    }
  }

  return { ok: true, body: data }
}
