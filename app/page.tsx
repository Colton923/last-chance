import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './main.module.scss'
import { PageLayout } from '../components/PageLayout'
import { Text } from '../components/Text'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Metadata } from 'next'

// Assets
import niceOutsidePhoto from '../public/images/outside_photo.jpg'
import taps from '../public/images/taps.jpg'
import sunday2 from '../public/images/sunday.jpg'
import slots from '../public/images/slots.jpeg'

export const metadata: Metadata = {
  title: 'Last Chance Bar & Grill | Peoria, IL',
  description:
    'Welcome to Last Chance Bar & Grill in Peoria, IL. Enjoy great food, cold drinks, and good times in a welcoming atmosphere. Join us for breakfast, lunch, dinner, or just drinks!',
  openGraph: {
    title: 'Last Chance Bar & Grill | Peoria, IL',
    description:
      'Welcome to Last Chance Bar & Grill in Peoria, IL. Enjoy great food, cold drinks, and good times in a welcoming atmosphere. Join us for breakfast, lunch, dinner, or just drinks!',
    url: 'https://lastchancepeoria.com',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/outside_photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Chance Bar & Grill Exterior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Last Chance Bar & Grill | Peoria, IL',
    description:
      'Welcome to Last Chance Bar & Grill in Peoria, IL. Enjoy great food, cold drinks, and good times in a welcoming atmosphere. Join us for breakfast, lunch, dinner, or just drinks!',
    images: ['/images/outside_photo.jpg'],
  },
}

// Hero Section Component
const Hero = memo(() => (
  <div className={styles.hero}>
    <Image
      src={niceOutsidePhoto}
      alt="Last Chance Bar & Grill"
      fill
      priority
      className={styles.heroImage}
    />
    <div className={styles.heroContent}>
      <Text color="default" size="3xl" weight="bold" className={styles.heroTitle}>
        Welcome to Last Chance
      </Text>
      <Text color="default" size="xl" className={styles.heroSubtitle}>
        Where Great Food Meets Good Times
      </Text>
      <Link href="/menu">
        <Button variant="primary" size="lg" className={styles.heroButton}>
          View Our Menu
        </Button>
      </Link>
    </div>
  </div>
))

Hero.displayName = 'Hero'

// Feature Section Component
const FeatureSection = memo(
  ({
    title,
    description,
    image,
    alt,
    reverse = false,
  }: {
    title: string
    description: string
    image: any
    alt: string
    reverse?: boolean
  }) => (
    <div className={`${styles.featureSection} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.featureContent}>
        <Text color="default" size="2xl" weight="bold">
          {title}
        </Text>
        <Text color="default" size="lg">
          {description}
        </Text>
      </div>
      <div className={styles.featureImage}>
        <Image src={image} alt={alt} fill />
      </div>
    </div>
  )
)

FeatureSection.displayName = 'FeatureSection'

// // Special Offers Component
// const SpecialOffers = memo(() => (
//   <div className={styles.specialOffers}>
//     <Container>
//       <Text color="default" size="2xl" weight="bold" className={styles.sectionTitle}>
//         Today's Specials
//       </Text>
//       <div className={styles.offersGrid}>
//         <div className={styles.offerCard}>
//           <BeerIcon />
//           <Text color="default" size="xl" weight="bold">
//             Happy Hour
//           </Text>
//           <Text color="default" size="base">
//             4PM - 7PM Daily
//           </Text>
//           <Text color="default" size="lg">
//             $2 Off All Draft Beers
//           </Text>
//         </div>
//         <div className={styles.offerCard}>
//           <EatIcon />
//           <Text color="default" size="xl" weight="bold">
//             Sunday Brunch
//           </Text>
//           <Text color="default" size="base">
//             10AM - 2PM
//           </Text>
//           <Text color="default" size="lg">
//             All-You-Can-Eat Breakfast
//           </Text>
//         </div>
//         <div className={styles.offerCard}>
//           <SlotsIcon />
//           <Text color="default" size="xl" weight="bold">
//             Gaming Special
//           </Text>
//           <Text color="default" size="base">
//             Monday - Thursday
//           </Text>
//           <Text color="default" size="lg">
//             Free Play with Dinner Purchase
//           </Text>
//         </div>
//       </div>
//     </Container>
//   </div>
// ))

// SpecialOffers.displayName = 'SpecialOffers'

// Welcome Section Component
const WelcomeSection = memo(() => (
  <Container>
    <div className={styles.welcomeSection}>
      <Text as="h2" size="2xl" weight="bold" className={styles.sectionTitle}>
        Welcome to Last Chance Bar & Grill
      </Text>
      <Text as="p" size="lg" className={styles.welcomeParagraph}>
        For over two decades, Last Chance Bar & Grill has been a cornerstone of the Peoria community, 
        serving up the coldest beer in town, delicious home-style cooking, and an atmosphere that feels 
        like home. Located at 2713 W Second St in Peoria, Illinois, we&apos;re more than just a bar and 
        grill—we&apos;re a gathering place where friends become family and memories are made.
      </Text>
      <Text as="p" size="lg" className={styles.welcomeParagraph}>
        Whether you&apos;re looking for a hearty breakfast to start your day, a satisfying lunch with 
        coworkers, a place to catch the big game with friends, or a relaxed dinner with family, 
        Last Chance has you covered. Our menu features generous portions of comfort food made from 
        scratch, all served in a welcoming environment by our friendly staff.
      </Text>
      <Text as="p" size="lg" className={styles.welcomeParagraph}>
        We take pride in being a locally-owned establishment that actively supports our community. 
        From sponsoring youth sports teams to hosting fundraisers for local charities, we believe in 
        giving back to the neighborhood that has supported us through the years. When you dine with us, 
        you&apos;re not just a customer—you&apos;re part of the Last Chance family.
      </Text>
    </div>
  </Container>
))

WelcomeSection.displayName = 'WelcomeSection'

// Home Page Component
export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <div className={styles.spacer} />
      <WelcomeSection />
      <div className={styles.spacer} />
      <Container>
        <FeatureSection
          title="Coldest Beer in Town"
          description="Enjoy our wide selection of craft and domestic beers, perfectly chilled and served with a smile. Our rotating taps feature local favorites and seasonal specialties. Whether you prefer a crisp lager, a hoppy IPA, or a smooth stout, our knowledgeable bartenders can help you find the perfect brew. We take pride in maintaining our draft system at optimal temperatures, ensuring every pour is ice-cold and refreshing."
          image={taps}
          alt="Beer taps at Last Chance"
        />
        <div className={styles.spacer} />
        <FeatureSection
          title="Home-Style Cooking"
          description="From hearty breakfasts to satisfying dinners, our kitchen serves up delicious comfort food made from scratch. Join us for all-day breakfast on weekends, featuring fluffy pancakes, perfectly cooked eggs, crispy bacon, and more. Our lunch and dinner menus showcase classic American favorites like juicy burgers, crispy chicken sandwiches, fresh salads, and daily specials that keep our regulars coming back for more. Every dish is prepared with quality ingredients and served in generous portions."
          image={sunday2}
          alt="Sunday special at Last Chance"
          reverse
        />
        <div className={styles.spacer} />
        <FeatureSection
          title="Entertainment & Gaming"
          description="Try your luck at our gaming machines while enjoying your favorite drinks. Watch the game on one of our multiple large-screen TVs, or head out to our spacious beer garden during warm weather for lawn games and outdoor fun. Last Chance is the perfect spot for entertainment and relaxation, whether you're celebrating a big win for your favorite team or just unwinding after a long day. Our friendly atmosphere makes it easy to strike up a conversation and make new friends."
          image={slots}
          alt="Gaming slots at Last Chance"
        />
      </Container>
      <div className={styles.spacer} />
      {/* <SpecialOffers /> */}
    </PageLayout>
  )
}
