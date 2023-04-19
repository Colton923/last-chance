import { MailService } from '@sendgrid/mail'
import type { ApplyForm } from 'app/apply/page'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body: ApplyForm = await request.json()
  if (!process.env.SENDGRID_API_KEY)
    throw new Error('SENDGRID_API_KEY is not defined.')

  const mailService = new MailService()
  mailService.setApiKey(process.env.SENDGRID_API_KEY as string)

  const msg = {
    to:
      process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
        ? 'colton923@gmail.com'
        : 'lastchancebarandgrill@yahoo.com',
    from: 'lastchancewebapp@gmail.com',
    subject: `New Application from ${body.name}`,
    text: `
    `,
    html: `
      <h1>New Application</h1>
      <p><strong>Name:</strong> ${body.name ? body.name : ''}</p>
      <p><strong>Email:</strong> ${body.email ? body.email : ''}</p>
      <p><strong>Phone:</strong> ${body.phone ? body.phone : ''}</p>
      <p><strong>Address:</strong> ${body.address ? body.address : ''}</p>
      <p><strong>City:</strong> ${body.city ? body.city : ''}</p>
      <p><strong>State:</strong> ${body.state ? body.state : ''}</p>
      <p><strong>Zip:</strong> ${body.zip ? body.zip : ''}</p>
      <p><strong>Position:</strong> ${body.position ? body.position : ''}</p>
      <p><strong>Availability:</strong> ${
        body.availability ? body.availability : ''
      }</p>
      <p><strong>Experience:</strong> ${body.experience ? body.experience : ''}</p>
      <p><strong>Why us:</strong> ${body.whyUs ? body.whyUs : ''}</p>
    `,
  }

  try {
    mailService.send(msg)
    return NextResponse.json(
      {
        message: 'Application Submitted',
      },
      {
        status: 200,
      }
    )
  } catch (error) {
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
