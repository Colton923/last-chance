import 'styles/globals.scss'
import Navbar from 'components/navbar/Navbar'
import Footer from 'components/footer/Footer'
import client from 'lib/sanity/client'
import { Catamaran } from 'next/font/google'
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
  const getHours = await client.fetch(hoursQuery)
  return getHours
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
        <meta
          name="description"
          content="The Last Chance Bar & Grill located in Alta Illinois is the Peoria and surrounding areas favorite restaurant. Come visit us for the best breakfast, the coldest drinks, and a fun night life. Try out our award winning dinner menu, and have cold cocktail. "
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Colton McClintock - Webdev Solutions LLC" />
        <meta name="keywords" content="Last Chance" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <title>The Last Chance Bar & Grill, Peoria IL</title>
      </head>
      <body>
        <main className={catamaran.className}>
          <Navbar />
          {children}
          <Footer hours={hours} />
        </main>
      </body>
    </html>
  )
}
