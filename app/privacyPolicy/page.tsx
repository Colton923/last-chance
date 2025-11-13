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
          <li>Analytics (Vercel Analytics)</li>
          <li>Advertising (Google AdSense)</li>
        </ul>

        <Text as="h2">Advertising and Cookies</Text>
        <Text as="p">
          We use Google AdSense to display advertisements on our website. Google AdSense
          uses cookies and similar technologies to:
        </Text>
        <ul>
          <li>Show personalized ads based on your interests</li>
          <li>Measure ad performance and engagement</li>
          <li>Prevent showing ads you&apos;ve already seen</li>
        </ul>
        <Text as="p">
          You can control your ad personalization preferences by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          . You can also opt out of personalized advertising by visiting{' '}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AboutAds.info
          </a>{' '}
          or{' '}
          <a
            href="https://www.networkadvertising.org/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Network Advertising Initiative
          </a>
          .
        </Text>

        <Text as="h2">Cookies</Text>
        <Text as="p">
          We use cookies to enhance your browsing experience and for advertising purposes.
          Cookies are small text files stored on your device. You can control cookie
          preferences through your browser settings. Note that disabling cookies may affect
          website functionality.
        </Text>

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
