import { PageLayout } from '../../components/PageLayout'
import { Text } from '../../components/Text'
import Image from 'next/image'
import styles from '../main.module.scss'
import { Metadata } from 'next'
import outsidePhoto from '../../public/images/outside_photo.jpg'
import barPhoto from '../../public/images/bar.jpg'
// import beerGardenPhoto from '../../public/images/beerGarden.webp'

export const metadata: Metadata = {
  title: 'About Us | Last Chance Bar & Grill',
  description:
    'Learn about the history, story, and community spirit behind Last Chance Bar & Grill in Peoria, IL. Serving our community since 2000 with great food, cold beer, and warm hospitality.',
  openGraph: {
    title: 'About Us | Last Chance Bar & Grill',
    description:
      'Learn about the history, story, and community spirit behind Last Chance Bar & Grill in Peoria, IL. Serving our community since 2000 with great food, cold beer, and warm hospitality.',
    url: 'https://lastchancepeoria.com/about',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Last Chance Bar & Grill',
    description:
      'Learn about the history, story, and community spirit behind Last Chance Bar & Grill in Peoria, IL.',
  },
}

export default function About() {
  return (
    <PageLayout
      title="About Last Chance Bar & Grill"
      description="Where Community Meets Comfort Since 2000"
      containerSize="lg"
    >
      <div className={styles.aboutContent}>
        {/* Our Story Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src={outsidePhoto}
              alt="Last Chance Bar & Grill exterior"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
              }}
              priority
            />
          </div>
          <div className={styles.aboutText}>
            <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
              Our Story
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              Nestled in the heart of Peoria, Illinois, Last Chance Bar & Grill has
              been a beloved community gathering place for over two decades. Since
              opening our doors in 2000, we&apos;ve been committed to providing our
              neighbors with exceptional food, the coldest beer in town, and an
              atmosphere that feels like home.
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              What started as a modest neighborhood bar has grown into a full-service
              restaurant and entertainment venue, all while maintaining the warm,
              welcoming spirit that makes Last Chance special. Our name reflects our
              commitment to being there when you need us most - whether it&apos;s
              your last chance to catch the game with friends, enjoy a home-cooked
              meal, or unwind after a long day.
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              Located at 2713 W Second St, we&apos;ve become more than just a bar and
              grill - we&apos;re a cornerstone of the Peoria community, a place where
              memories are made, friendships are forged, and everyone knows your
              name.
            </Text>
          </div>
        </section>

        {/* What Makes Us Special Section */}
        <section className={styles.aboutSection}>
          <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
            What Makes Us Special
          </Text>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Coldest Beer in Town
              </Text>
              <Text as="p" size="base" className={styles.featureParagraph}>
                We take pride in serving the coldest beer in Peoria. Our
                state-of-the-art draft system maintains optimal temperature, ensuring
                every pour is perfectly chilled. With a rotating selection of craft
                beers, local brews, and domestic favorites, there&apos;s always
                something new to try. Our knowledgeable bartenders are happy to
                recommend the perfect beer to pair with your meal or match your taste
                preferences.
              </Text>
            </div>

            <div className={styles.featureCard}>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Home-Style Cooking
              </Text>
              <Text as="p" size="base" className={styles.featureParagraph}>
                Our kitchen serves up generous portions of delicious comfort food
                made from scratch. From hearty breakfast classics served all day to
                mouthwatering burgers, sandwiches, and daily specials, every dish is
                prepared with care using quality ingredients. Whether you&apos;re
                craving a classic burger and fries, a fresh salad, or one of our
                signature specialties, our menu has something to satisfy every
                appetite.
              </Text>
            </div>

            <div className={styles.featureCard}>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Community Focused
              </Text>
              <Text as="p" size="base" className={styles.featureParagraph}>
                We&apos;re deeply committed to supporting our local community. From
                sponsoring youth sports teams to hosting fundraisers for local
                charities, we believe in giving back to the neighborhood that has
                supported us for so many years. Our donation request program helps
                local organizations, schools, and nonprofits make a difference in
                Peoria. We&apos;re more than a business - we&apos;re your neighbors.
              </Text>
            </div>

            <div className={styles.featureCard}>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Entertainment & Gaming
              </Text>
              <Text as="p" size="base" className={styles.featureParagraph}>
                Beyond great food and drinks, we offer plenty of entertainment
                options. Catch the big game on one of our multiple large-screen TVs,
                try your luck at our gaming machines, or simply enjoy the lively
                atmosphere with friends. Our spacious beer garden provides the
                perfect outdoor setting during warmer months, complete with games and
                ample seating for large groups.
              </Text>
            </div>
          </div>
        </section>

        {/* Our Atmosphere Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutText}>
            <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
              Our Atmosphere
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              Step inside Last Chance and you&apos;ll immediately feel at home. Our
              spacious interior features comfortable seating, a well-stocked bar, and
              a welcoming ambiance that invites you to stay awhile. Whether
              you&apos;re grabbing a quick lunch, meeting friends for happy hour, or
              settling in to watch the game, our friendly staff ensures you have
              everything you need.
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              The bar area is perfect for solo diners or small groups looking to
              catch up over drinks, while our dining room accommodates families and
              larger parties. During pleasant weather, our outdoor beer garden
              becomes the place to be, offering fresh air, lawn games, and a relaxed
              vibe that&apos;s perfect for socializing.
            </Text>
          </div>
          <div className={styles.aboutImageWrapper}>
            <Image
              src={barPhoto}
              alt="Inside Last Chance Bar & Grill"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
              }}
            />
          </div>
        </section>

        {/* Hours & Location Section */}
        <section className={styles.aboutSection}>
          <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
            Hours & Location
          </Text>
          <div className={styles.hoursLocationGrid}>
            <div>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Kitchen Hours
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Monday - Tuesday:</strong> 11:00 AM - 9:00 PM
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Wednesday - Friday:</strong> 8:00 AM - 9:00 PM
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Saturday - Sunday:</strong> 7:00 AM - 9:00 PM
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <em>Breakfast served all day on weekends!</em>
              </Text>
            </div>

            <div>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Bar Hours
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Monday - Tuesday:</strong> 11:00 AM - 9:00 PM
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Wednesday - Friday:</strong> 8:00 AM - 2:00 AM
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Saturday:</strong> 7:00 AM - 2:00 AM
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Sunday:</strong> 7:00 AM - 10:00 PM
              </Text>
            </div>

            <div>
              <Text as="h3" size="xl" weight="bold" className={styles.featureTitle}>
                Find Us
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                2713 W Second St
                <br />
                Peoria, IL 61615
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Phone:</strong> (309) 243-5036
              </Text>
              <Text as="p" size="base" className={styles.aboutParagraph}>
                <strong>Email:</strong> lastchancebarandgrill@yahoo.com
              </Text>
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutImageWrapper}>
            <Image
              src={outsidePhoto}
              alt="Last Chance beer garden"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
              }}
            />
          </div>
          <div className={styles.aboutText}>
            <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
              Join Our Team
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              Last Chance isn&apos;t just a great place to dine and drink - it&apos;s
              also a wonderful place to work. We&apos;re always looking for friendly,
              hardworking individuals to join our team. From bartenders and servers
              to kitchen staff and managers, we offer competitive pay, flexible
              scheduling, and a supportive work environment.
            </Text>
            <Text as="p" size="base" className={styles.aboutParagraph}>
              Our staff members are the heart of Last Chance. Many of our team
              members have been with us for years, creating a close-knit work family
              that shows in the quality of service we provide. If you&apos;re
              interested in becoming part of the Last Chance family, visit our{' '}
              <a href="/apply">employment page</a> to submit an application.
            </Text>
          </div>
        </section>

        {/* Community Involvement Section */}
        <section className={styles.aboutSection}>
          <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
            Community Involvement
          </Text>
          <Text as="p" size="base" className={styles.aboutParagraph}>
            At Last Chance Bar & Grill, we believe in the power of community. Over
            the years, we&apos;ve had the privilege of supporting countless local
            organizations, schools, sports teams, and charitable causes throughout
            Peoria. From donating gift certificates for silent auctions to sponsoring
            little league teams, we&apos;re committed to making a positive impact in
            our neighborhood.
          </Text>
          <Text as="p" size="base" className={styles.aboutParagraph}>
            We regularly host fundraising events for local causes and partner with
            community organizations to give back. Whether it&apos;s supporting a
            family in need, contributing to a school fundraiser, or helping a local
            nonprofit reach its goals, we&apos;re proud to play our part in making
            Peoria a better place for everyone.
          </Text>
          <Text as="p" size="base" className={styles.aboutParagraph}>
            If your organization is seeking support for an upcoming event or
            fundraiser, we invite you to submit a{' '}
            <a href="/donation">donation request</a>. We review each request
            carefully and do our best to support as many worthy causes as possible
            throughout the year.
          </Text>
        </section>

        {/* Visit Us Section */}
        <section className={styles.aboutSection}>
          <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
            Visit Us Today
          </Text>
          <Text as="p" size="base" className={styles.aboutParagraph}>
            Whether you&apos;re a longtime regular or visiting for the first time, we
            look forward to serving you at Last Chance Bar & Grill. Come for the
            coldest beer in town, stay for the delicious food, friendly atmosphere,
            and sense of community that makes us special. We&apos;re not just a bar
            and grill - we&apos;re your home away from home in Peoria.
          </Text>
          <Text as="p" size="base" className={styles.aboutParagraph}>
            Stop by today to experience what makes Last Chance a Peoria institution.
            Bring your friends, bring your family, and get ready to make some
            memories. We&apos;ll see you soon!
          </Text>
        </section>
      </div>
    </PageLayout>
  )
}
