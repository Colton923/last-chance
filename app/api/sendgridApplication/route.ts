import { NextResponse } from 'next/server'
import { emailService, generateApplicationEmailHTML } from '../../../lib/email'
import { cleanLine, readFormBody } from '../../../lib/email/guard'

export async function POST(request: Request) {
  try {
    const guard = await readFormBody(request, ['name', 'email'], 'email')
    if (!guard.ok) return guard.response
    const body = guard.body as unknown as Parameters<typeof generateApplicationEmailHTML>[0]

    await emailService.sendEmail({
      subject: `New Application from ${cleanLine(body.name)}`,
      html: generateApplicationEmailHTML(body),
      text: '',
    })

    return NextResponse.json({ message: 'Application Submitted' }, { status: 200 })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending application email:', error)
    }
    return NextResponse.json({ message: 'Application Failed to Send' }, { status: 500 })
  }
}
