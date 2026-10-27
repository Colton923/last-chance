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

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

// Form values are user-controlled; never place them in HTML unescaped
export function esc(value: unknown): string {
  if (value === undefined || value === null) return ''
  return String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPES[char])
}

export function generateApplicationEmailHTML(data: ApplicationData): string {
  return `
    <h1>New Application</h1>
    <p><strong>Name:</strong> ${esc(data.name)}</p>
    <p><strong>Email:</strong> ${esc(data.email)}</p>
    <p><strong>Phone:</strong> ${esc(data.phone)}</p>
    <p><strong>Address:</strong> ${esc(data.address)}</p>
    <p><strong>City:</strong> ${esc(data.city)}</p>
    <p><strong>State:</strong> ${esc(data.state)}</p>
    <p><strong>Zip:</strong> ${esc(data.zip)}</p>
    <p><strong>Position:</strong> ${esc(data.position)}</p>
    <p><strong>Availability:</strong> ${esc(data.availability)}</p>
    <p><strong>Experience:</strong> ${esc(data.experience)}</p>
    <p><strong>Why us:</strong> ${esc(data.whyUs)}</p>
  `
}

export function generateDonationEmailHTML(data: DonationData): string {
  return `
    <h1>New Donation Request</h1>
    <p><strong>Contact Name:</strong> ${esc(data.contactName)}</p>
    <p><strong>Contact Email:</strong> ${esc(data.contactEmail)}</p>
    <p><strong>Contact Phone:</strong> ${esc(data.contactPhone)}</p>
    <p><strong>Organization Name:</strong> ${esc(data.organizationName)}</p>
    <p><strong>Organization Address:</strong> ${esc(data.contactAddress)}</p>
    <p><strong>Organization City:</strong> ${esc(data.contactCity)}</p>
    <p><strong>Organization State:</strong> ${esc(data.contactState)}</p>
    <p><strong>Organization Zip:</strong> ${esc(data.contactZip)}</p>
    <p><strong>Organization Donation Needed By:</strong> ${esc(data.donationNeededBy)}</p>
    <p><strong>Organization Donation Value:</strong> ${esc(data.donationValue)}</p>
    <p><strong>Organization Event Date:</strong> ${esc(data.eventDate?.start)} - ${esc(data.eventDate?.end)}</p>
    <p><strong>Organization Event Purpose:</strong> ${esc(data.eventPurpose)}</p>
    <p><strong>Organization Event Type:</strong> ${esc(data.eventType)}</p>
    <p><strong>Organization Participants:</strong> ${esc(data.participants)}</p>
    <p><strong>Organization Request Date:</strong> ${esc(data.requestDate)}</p>
    <p><strong>Organization Donation Type:</strong> ${esc(data.typeOfDonation)}</p>
    <p><strong>Organization Why The Last Chance:</strong> ${esc(data.whyUs)}</p>
  `
}

