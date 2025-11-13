import { NextResponse } from 'next/server'
import { emailService, generateApplicationEmailHTML } from '../../../lib/email'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    await emailService.sendEmail({
      subject: `New Application from ${body.name}`,
      html: generateApplicationEmailHTML(body),
      text: '',
    })

    return NextResponse.json(
      {
        message: 'Application Submitted',
      },
      {
        status: 200,
      }
      )
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error sending application email:', error)
      }
      return NextResponse.json(
      {
        message: 'Application Failed to Send',
      },
      {
        status: 500,
      }
    )
  }
}
