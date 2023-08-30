import { MailService } from '@sendgrid/mail'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
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
    subject: `New Donation Request from ${body.contactName}`,
    text: `
    `,
    html: `
      <h1>New Donation Request</h1>
      <p><strong>Contact Name:</strong> ${
        body.contactName ? body.contactName : ''
      }</p>
      <p><strong>Contact Email:</strong> ${
        body.contactEmail ? body.contactEmail : ''
      }</p>
      <p><strong>Contact Phone:</strong> ${
        body.contactPhone ? body.contactPhone : ''
      }</p>
      <p><strong>Organization Name:</strong> ${
        body.organizationName ? body.organizationName : ''
      }</p>
      <p><strong>Organization Address:</strong> ${
        body.contactAddress ? body.contactAddress : ''
      }</p>
      <p><strong>Organization City:</strong> ${
        body.contactCity ? body.contactCity : ''
      }</p>
      <p><strong>Organization State:</strong> ${
        body.contactState ? body.contactState : ''
      }</p>
      <p><strong>Organization Zip:</strong> ${
        body.contactZip ? body.contactZip : ''
      }</p>
      <p><strong>Organization Donation Needed By:</strong> ${
        body.donationNeededBy ? body.donationNeededBy : ''
      }</p>
      <p><strong>Organization Donation Value:</strong> ${
        body.donationValue ? body.donationValue : ''
      }</p>
      <p><strong>Organization Event Date:</strong> ${
        body.eventDate.start ? body.eventDate.start : ''
      } - ${body.eventDate.end ? body.eventDate.end : ''}</p>
      <p><strong>Organization Event Purpose:</strong> ${
        body.eventPurpose ? body.eventPurpose : ''
      }</p>
      <p><strong>Organization Event Type:</strong> ${
        body.eventType ? body.eventType : ''
      }</p>
      <p><strong>Organization Participants:</strong> ${
        body.participants ? body.participants : ''
      }</p>
      <p><strong>Organization Donation Description:</strong> ${
        body.requestDate ? body.requestDate : ''
      }</p>
      <p><strong>Organization Donation Type:</strong> ${
        body.typeOfDonation ? body.typeOfDonation : ''
      }</p>
      <p><strong>Organization Why The Last Chance:</strong> ${
        body.whyUs ? body.whyUs : ''
      }</p>
    `,
  }

  try {
    mailService.send(msg)
    return NextResponse.json(
      {
        message: 'Donation Request Submitted',
      },
      {
        status: 200,
      }
    )
  } catch (error) {
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
