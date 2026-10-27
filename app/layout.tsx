import type { Metadata, Viewport } from 'next'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import type { HoursDoc } from '../components/footer/Footer'
import { Background } from '../components/Background'
import { CookieConsent } from '../components/CookieConsent'
import { Analytics } from '@vercel/analytics/react'
import { openGraphImage } from './shared-metadata'
import '../styles/globals.scss'
import client from 'lib/sanity/client'
import { Catamaran } from 'next/font/google'

interface LayoutProps {
  children: React.ReactNode
}

const catamaran = Catamaran({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-catamaran',
})

const DAY_FIELDS = `{ closed, open, close, note }`

const HOURS_QUERY = `*[_type == "hours"] | order(_createdAt asc) {
  name,
  kitchen,
  bar,
  holidayNote,
  monday ${DAY_FIELDS},
  tuesday ${DAY_FIELDS},
  wednesday ${DAY_FIELDS},
  thursday ${DAY_FIELDS},
  friday ${DAY_FIELDS},
  saturday ${DAY_FIELDS},
  sunday ${DAY_FIELDS}
}`

const DEFAULT_HOURS: HoursDoc[] = [
  {
    name: 'Kitchen Hours',
    kitchen: true,
    monday: { open: '11:00am', close: '9:00pm' },
    tuesday: { open: '11:00am', close: '9:00pm' },
    wednesday: { open: '8:00am', close: '9:00pm' },
    thursday: { open: '8:00am', close: '9:00pm' },
    friday: { open: '8:00am', close: '9:00pm' },
    saturday: { open: '7:00am', close: '9:00pm' },
    sunday: { open: '7:00am', close: '9:00pm' },
  },
  {
    name: 'Bar Hours',
    bar: true,
    monday: { open: '11:00am', close: '9:00pm' },
    tuesday: { open: '11:00am', close: '9:00pm' },
    wednesday: { open: '8:00am', close: '2:00am' },
    thursday: { open: '8:00am', close: '2:00am' },
    friday: { open: '8:00am', close: '2:00am' },
    saturday: { open: '7:00am', close: '2:00am' },
    sunday: { open: '7:00am', close: '10:00pm' },
  },
]

async function getHours(): Promise<HoursDoc[]> {
  try {
    const hours = await client.fetch<HoursDoc[]>(HOURS_QUERY, undefined, {
      next: {
        revalidate: 60,
      },
    })
    return hours && hours.length > 0 ? hours : DEFAULT_HOURS
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching hours:', error)
    }
    return DEFAULT_HOURS
  }
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lastchancepeoria.com'),
  title: {
    default: 'The Last Chance Bar & Grill, Peoria IL',
    template: '%s | Last Chance Bar & Grill',
  },
  description: 'Coldest beer in town, cheapest all around',
  keywords: ['bar', 'grill', 'peoria', 'illinois', 'food', 'drinks', 'restaurant'],
  other: {
    'google-adsense-account': 'ca-pub-7507197443167447',
  },
  authors: [{ name: 'Colton McClintock', url: 'https://webdevsolutions.llc' }],
  openGraph: {
    ...openGraphImage,
    title: 'The Last Chance Bar & Grill, Peoria IL',
    description: 'Coldest beer in town, cheapest all around',
    url: 'https://lastchancepeoria.com',
    siteName: 'The Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Last Chance Bar & Grill',
    description: 'Coldest beer in town, cheapest all around',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a1b21',
}

export default async function RootLayout({ children }: LayoutProps) {
  const hours = await getHours()

  return (
    <html lang="en" className={catamaran.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7507197443167447"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Background />
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer hours={hours} />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
