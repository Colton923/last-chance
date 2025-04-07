import { FormPage } from '../../components/FormPage'
import ApplicationForm from '../../components/Forms/applicationForm/ApplicationForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Our Team | Last Chance Bar & Grill',
  description:
    "We're always looking for talented individuals to join our team at Last Chance Bar & Grill. Apply now for opportunities in our kitchen, bar, and service staff.",
  openGraph: {
    title: 'Join Our Team | Last Chance Bar & Grill',
    description:
      "We're always looking for talented individuals to join our team at Last Chance Bar & Grill. Apply now for opportunities in our kitchen, bar, and service staff.",
    url: 'https://lastchancepeoria.com/apply',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/outside_photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Chance Bar & Grill - Career Opportunities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Our Team | Last Chance Bar & Grill',
    description:
      "We're always looking for talented individuals to join our team at Last Chance Bar & Grill. Apply now for opportunities in our kitchen, bar, and service staff.",
    images: ['/images/outside_photo.jpg'],
  },
}

export default function Apply() {
  return (
    <FormPage
      title="Join Our Team"
      description="We're always looking for talented individuals to join our team. Fill out the application below and we'll get back to you soon!"
    >
      <ApplicationForm />
    </FormPage>
  )
}
