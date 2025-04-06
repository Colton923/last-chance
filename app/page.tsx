'use client'

import { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './main.module.scss'
import { PageLayout } from '../components/PageLayout'
import { Text } from '../components/Text'
import { Container } from '../components/Container'

// Assets
import niceOutsidePhoto from '../public/images/outside_photo.webp'
import taps from '../public/images/taps.webp'
import sunday2 from '../public/images/sunday.webp'
import slots from '../public/images/slots.webp'

// Hero Section Component
const Hero = memo(() => (
  <div className={styles.hero}>
    <Image
      src={niceOutsidePhoto.src}
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
      <Link href="/menu" className={styles.heroLink}>
        View Our Menu
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

// Home Page Component
export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <div className={styles.spacer} />
      <Container>
        <FeatureSection
          title="Coldest Beer in Town"
          description="Enjoy our wide selection of craft and domestic beers, perfectly chilled and served with a smile. Our rotating taps feature local favorites and seasonal specialties."
          image={taps}
          alt="Beer taps at Last Chance"
        />
        <div className={styles.spacer} />
        <FeatureSection
          title="Home-Style Cooking"
          description="From hearty breakfasts to satisfying dinners, our kitchen serves up delicious comfort food made from scratch. Join us for all-day breakfast and daily specials."
          image={sunday2}
          alt="Sunday special at Last Chance"
          reverse
        />
        <div className={styles.spacer} />
        <FeatureSection
          title="Entertainment & Gaming"
          description="Try your luck at our gaming machines while enjoying your favorite drinks. A perfect spot for entertainment and relaxation."
          image={slots}
          alt="Gaming slots at Last Chance"
        />
      </Container>
      <div className={styles.spacer} />
      {/* <SpecialOffers /> */}
    </PageLayout>
  )
}
