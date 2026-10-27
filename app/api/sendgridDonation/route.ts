import { NextResponse } from 'next/server'
import { emailService, generateDonationEmailHTML } from '../../../lib/email'
import { cleanLine, readFormBody } from '../../../lib/email/guard'

export async function POST(request: Request) {
  try {
    const guard = await readFormBody(
      request,
      ['contactName', 'contactEmail'],
      'contactEmail'
    )
    if (!guard.ok) return guard.response
    const body = guard.body as unknown as Parameters<typeof generateDonationEmailHTML>[0]

    await emailService.sendEmail({
      subject: `New Donation Request from ${cleanLine(body.contactName)}`,
      html: generateDonationEmailHTML(body),
      text: '',
    })

    return NextResponse.json({ message: 'Donation Request Submitted' }, { status: 200 })
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending donation email:', error)
    }
    return NextResponse.json({ message: 'Donation Request Failed to Send' }, { status: 500 })
  }
}
