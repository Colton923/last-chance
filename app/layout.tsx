import 'styles/globals.scss'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import client from 'lib/sanity/client'
import { Catamaran } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { openGraphImage } from './shared-metadata'

interface Props {
  children: React.ReactNode
}

const hoursQuery = `*[_type == "hours"] {
  kitchen,
  bar,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}`
const catamaran = Catamaran({
  subsets: ['latin-ext'],
  display: 'swap',
})

async function getHours() {
  const getHours = await client.fetch(hoursQuery, undefined, { cache: 'no-store' })
  return getHours
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lastchancepeoria.com'),
  title: 'The Last Chance Bar & Grill, Peoria IL',
  description: 'Coldest beer in town, cheapest all around',
  openGraph: {
    ...openGraphImage,
    title: 'The Last Chance Bar & Grill, Peoria IL',
    description: 'Coldest beer in town, cheapest all around',
    url: 'https://lastchancepeoria.com',
    siteName: 'The Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'favicon-32x32',
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        rel: 'favicon-16x16',
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
  },
}

export default async function RootLayout({ children }: Props) {
  const hours = await getHours()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="keywords" content="Last Chance" />
        <meta name="theme-color" content="#000000" />
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
        <main className={catamaran.className}>
          <Navbar />
          {children}
          <Footer hours={hours} />
          <Analytics />
        </main>
      </body>
    </html>
  )
}
