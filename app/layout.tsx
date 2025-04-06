import type { Metadata } from 'next'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Background } from '../components/Background'
import { Analytics } from '@vercel/analytics/react'
import { openGraphImage } from './shared-metadata'
import '../styles/globals.scss'
import client from 'lib/sanity/client'
import { Catamaran } from 'next/font/google'

interface LayoutProps {
  children: React.ReactNode
}

interface DayHours {
  open: string
  close: string
}

interface Hours {
  kitchen?: boolean
  bar?: boolean
  monday: DayHours
  tuesday: DayHours
  wednesday: DayHours
  thursday: DayHours
  friday: DayHours
  saturday: DayHours
  sunday: DayHours
}

const catamaran = Catamaran({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-catamaran',
})

const HOURS_QUERY = `*[_type == "hours"][0] {
  kitchen,
  bar,
  monday {
    open,
    close
  },
  tuesday {
    open,
    close
  },
  wednesday {
    open,
    close
  },
  thursday {
    open,
    close
  },
  friday {
    open,
    close
  },
  saturday {
    open,
    close
  },
  sunday {
    open,
    close
  }
}`

async function getHours(): Promise<Hours> {
  try {
    const hours = await client.fetch<Hours>(HOURS_QUERY, undefined, {
      next: {
        revalidate: 60,
      },
    })
    return hours
  } catch (error) {
    console.error('Error fetching hours:', error)
    // Return default hours instead of throwing
    return {
      kitchen: true,
      bar: true,
      monday: {
        open: '11:00am',
        close: '9:00pm',
      },
      tuesday: {
        open: '11:00am',
        close: '9:00pm',
      },
      wednesday: {
        open: '8:00am',
        close: '2:00am',
      },
      thursday: {
        open: '8:00am',
        close: '2:00am',
      },
      friday: {
        open: '8:00am',
        close: '2:00am',
      },
      saturday: {
        open: '7:00am',
        close: '2:00am',
      },
      sunday: {
        open: '7:00am',
        close: '10:00pm',
      },
    }
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
  verification: {
    google: 'ca-pub-7507197443167447',
  },
}

export default async function RootLayout({ children }: LayoutProps) {
  const hours = await getHours()

  return (
    <html lang="en" className={catamaran.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="keywords" content="Last Chance" />
        <meta name="theme-color" content="#1a1b21" />
        <meta name="google-adsense-account" content="ca-pub-7507197443167447" />
        <meta property="og:image" content="/api/og" />
        <link rel="manifest" href="/site.webmanifest" />
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
        <Footer hours={hours as any} />
        <Analytics />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7507197443167447"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
