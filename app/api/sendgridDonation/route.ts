import { NextResponse } from 'next/server'
import { emailService, generateDonationEmailHTML } from '../../../lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    await emailService.sendEmail({
      subject: `New Donation Request from ${body.contactName}`,
      html: generateDonationEmailHTML(body),
      text: '',
    })

    return NextResponse.json(
      {
        message: 'Donation Request Submitted',
      },
      {
        status: 200,
      }
      )
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error sending donation email:', error)
      }
      return NextResponse.json(
      {
        message: 'Donation Request Failed to Send',
      },
      {
        status: 500,
      }
    )
  }
}
