interface ApplicationData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  position: string
  availability: string
  experience: string
  whyUs: string
}

interface DonationData {
  contactName: string
  contactEmail: string
  contactPhone: string
  organizationName: string
  contactAddress: string
  contactCity: string
  contactState: string
  contactZip: string
  donationNeededBy: string
  donationValue: number
  eventDate: {
    start: string
    end: string
  }
  eventPurpose: string
  eventType: string
  participants: number
  requestDate: string
  typeOfDonation: string
  whyUs: string
}

export function generateApplicationEmailHTML(data: ApplicationData): string {
  return `
    <h1>New Application</h1>
    <p><strong>Name:</strong> ${data.name || ''}</p>
    <p><strong>Email:</strong> ${data.email || ''}</p>
    <p><strong>Phone:</strong> ${data.phone || ''}</p>
    <p><strong>Address:</strong> ${data.address || ''}</p>
    <p><strong>City:</strong> ${data.city || ''}</p>
    <p><strong>State:</strong> ${data.state || ''}</p>
    <p><strong>Zip:</strong> ${data.zip || ''}</p>
    <p><strong>Position:</strong> ${data.position || ''}</p>
    <p><strong>Availability:</strong> ${data.availability || ''}</p>
    <p><strong>Experience:</strong> ${data.experience || ''}</p>
    <p><strong>Why us:</strong> ${data.whyUs || ''}</p>
  `
}

export function generateDonationEmailHTML(data: DonationData): string {
  return `
    <h1>New Donation Request</h1>
    <p><strong>Contact Name:</strong> ${data.contactName || ''}</p>
    <p><strong>Contact Email:</strong> ${data.contactEmail || ''}</p>
    <p><strong>Contact Phone:</strong> ${data.contactPhone || ''}</p>
    <p><strong>Organization Name:</strong> ${data.organizationName || ''}</p>
    <p><strong>Organization Address:</strong> ${data.contactAddress || ''}</p>
    <p><strong>Organization City:</strong> ${data.contactCity || ''}</p>
    <p><strong>Organization State:</strong> ${data.contactState || ''}</p>
    <p><strong>Organization Zip:</strong> ${data.contactZip || ''}</p>
    <p><strong>Organization Donation Needed By:</strong> ${data.donationNeededBy || ''}</p>
    <p><strong>Organization Donation Value:</strong> ${data.donationValue || ''}</p>
    <p><strong>Organization Event Date:</strong> ${data.eventDate?.start || ''} - ${data.eventDate?.end || ''}</p>
    <p><strong>Organization Event Purpose:</strong> ${data.eventPurpose || ''}</p>
    <p><strong>Organization Event Type:</strong> ${data.eventType || ''}</p>
    <p><strong>Organization Participants:</strong> ${data.participants || ''}</p>
    <p><strong>Organization Request Date:</strong> ${data.requestDate || ''}</p>
    <p><strong>Organization Donation Type:</strong> ${data.typeOfDonation || ''}</p>
    <p><strong>Organization Why The Last Chance:</strong> ${data.whyUs || ''}</p>
  `
}

