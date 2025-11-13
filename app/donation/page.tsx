import { PageLayout } from '../../components/PageLayout'
import { DonationForm } from '../../components/Forms/donationForm/DonationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donation Request | Last Chance Bar & Grill',
  description:
    'Submit a donation request for your organization or event. Last Chance Bar & Grill is proud to support our local community in Peoria, IL.',
  openGraph: {
    title: 'Donation Request | Last Chance Bar & Grill',
    description:
      'Submit a donation request for your organization or event. Last Chance Bar & Grill is proud to support our local community in Peoria, IL.',
    url: 'https://lastchancepeoria.com/donation',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/outside_photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Chance Bar & Grill - Community Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donation Request | Last Chance Bar & Grill',
    description:
      'Submit a donation request for your organization or event. Last Chance Bar & Grill is proud to support our local community in Peoria, IL.',
    images: ['/images/outside_photo.jpg'],
  },
}

export default function Donation() {
  return (
    <PageLayout
      title="Donation Request Form"
      description="Please fill out the form below to submit a donation request. We will review your request and get back to you within 5-7 business days."
    >
      <DonationForm />
    </PageLayout>
  )
}
