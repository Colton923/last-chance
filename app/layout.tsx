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

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BarOrPub', 'Restaurant'],
  '@id': 'https://lastchancepeoria.com/#restaurant',
  name: 'The Last Chance Bar & Grill',
  alternateName: 'Last Chance Bar & Grill',
  url: 'https://lastchancepeoria.com',
  image: 'https://lastchancepeoria.com/images/outside_photo.jpg',
  logo: 'https://lastchancepeoria.com/images/logo.png',
  telephone: '+1-309-243-5036',
  email: 'lastchancebarandgrill@yahoo.com',
  priceRange: '$',
  servesCuisine: ['American', 'Comfort Food', 'Breakfast', 'Pub Food', 'Burgers'],
  acceptsReservations: false,
  hasMenu: 'https://lastchancepeoria.com/menu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2713 W Second St',
    addressLocality: 'Peoria',
    addressRegion: 'IL',
    postalCode: '61615',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.8111097,
    longitude: -89.6348186,
  },
  hasMap:
    'https://www.google.com/maps/place/Last+Chance+Bar+%26+Grill/@40.8111097,-89.6370073,17z/data=!4m14!1m7!3m6!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!2sLast+Chance+Bar+%26+Grill!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y',
  sameAs: ['https://www.facebook.com/lastchance17'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday'],
      opens: '11:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '02:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '07:00',
      closes: '02:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '07:00',
      closes: '22:00',
    },
  ],
}

export default async function RootLayout({ children }: LayoutProps) {
  const hours = await getHours()

  return (
    <html lang="en" className={catamaran.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
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
