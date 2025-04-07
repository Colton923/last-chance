import Link from 'next/link'
import styles from '../main.module.scss'
import { Text } from 'components/Text'
import { PageLayout } from 'components/PageLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Last Chance Bar & Grill',
  description:
    'Learn about how Last Chance Bar & Grill collects, uses, and protects your personal information. Read our privacy policy for full details.',
  openGraph: {
    title: 'Privacy Policy | Last Chance Bar & Grill',
    description:
      'Learn about how Last Chance Bar & Grill collects, uses, and protects your personal information. Read our privacy policy for full details.',
    url: 'https://lastchancepeoria.com/privacyPolicy',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Last Chance Bar & Grill',
    description:
      'Learn about how Last Chance Bar & Grill collects, uses, and protects your personal information. Read our privacy policy for full details.',
  },
}

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy" containerSize="lg">
      <div className={styles.privacyPolicy}>
        <Text as="p">
          We take your privacy seriously. This policy outlines how we collect and use
          data across our website.{' '}
          <Link href="mailto:privacy@lastchancepeoria.com">
            privacy@lastchancepeoria.com
          </Link>
        </Text>

        <Text as="h2">Information We Collect</Text>
        <Text as="p">
          We collect information that you voluntarily provide to us when you:
        </Text>
        <ul>
          <li>Submit a job application</li>
          <li>Make a donation request</li>
          <li>Interact with our menu items</li>
          <li>Contact us through our website</li>
        </ul>

        <Text as="h2">How We Use Your Information</Text>
        <Text as="p">We use the information we collect to:</Text>
        <ul>
          <li>Process and respond to your requests</li>
          <li>Improve our website and services</li>
          <li>Communicate with you about your interactions</li>
          <li>Analyze how our website is used</li>
        </ul>

        <Text as="h2">Information Security</Text>
        <Text as="p">
          We implement appropriate security measures to protect your personal
          information. However, no internet transmission is 100% secure.
        </Text>

        <Text as="h2">Third-Party Services</Text>
        <Text as="p">We use third-party services for:</Text>
        <ul>
          <li>Email communication (SendGrid)</li>
          <li>Content management (Sanity)</li>
          <li>Analytics (Google Analytics)</li>
        </ul>

        <Text as="h2">Your Rights</Text>
        <Text as="p">You have the right to:</Text>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction of your data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of communications</li>
        </ul>

        <Text as="h2">Contact Us</Text>
        <Text as="p">
          If you have questions about this privacy policy, please contact us at{' '}
          <Link href="mailto:privacy@lastchancepeoria.com">
            privacy@lastchancepeoria.com
          </Link>
        </Text>
      </div>
    </PageLayout>
  )
}
