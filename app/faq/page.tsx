import { PageLayout } from '../../components/PageLayout'
import { Text } from '../../components/Text'
import { Card } from '../../components/Card'
import styles from '../main.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Last Chance Bar & Grill',
  description:
    'Find answers to common questions about Last Chance Bar & Grill in Peoria, IL. Learn about our hours, menu, reservations, events, and more.',
  openGraph: {
    title: 'FAQ | Last Chance Bar & Grill',
    description:
      'Find answers to common questions about Last Chance Bar & Grill in Peoria, IL.',
    url: 'https://lastchancepeoria.com/faq',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
  },
}

export default function FAQ() {
  const faqs = [
    {
      category: 'General Information',
      questions: [
        {
          q: 'What are your hours of operation?',
          a: 'Our kitchen hours are Monday-Tuesday 11am-9pm, Wednesday-Friday 8am-9pm, and Saturday-Sunday 7am-9pm. Our bar stays open later - until 2am Wednesday through Saturday. Full hours are available on our website and you can always call (309) 243-5036 to confirm.',
        },
        {
          q: 'Where are you located?',
          a: "We're located at 2713 W Second St, Peoria, IL 61615. We're easily accessible from downtown Peoria and have ample parking available for our guests.",
        },
        {
          q: 'Do you take reservations?',
          a: 'We operate on a first-come, first-served basis for most occasions. However, for large parties (8 or more people) or special events, we recommend calling ahead at (309) 243-5036 so we can better accommodate your group. We want to ensure you have the best possible experience when you visit.',
        },
        {
          q: 'Is Last Chance family-friendly?',
          a: 'Absolutely! While we have a full bar, we welcome families with children. Our menu includes options that appeal to all ages, and we serve breakfast all day on weekends - perfect for family brunches. We have high chairs available and our staff is always happy to accommodate families.',
        },
      ],
    },
    {
      category: 'Food & Menu',
      questions: [
        {
          q: 'Do you serve breakfast all day?',
          a: 'We serve breakfast all day on weekends (Saturday and Sunday starting at 7am). During the week, we offer breakfast Wednesday through Friday starting at 8am. Our breakfast menu features classic favorites like eggs, pancakes, omelets, breakfast sandwiches, and more.',
        },
        {
          q: 'Do you have vegetarian or gluten-free options?',
          a: "Yes! We offer several vegetarian options including salads, veggie burgers, and meat-free sandwiches. While we're not a dedicated gluten-free kitchen, we can accommodate many dietary restrictions. Please inform your server of any dietary needs and our kitchen staff will do their best to accommodate you.",
        },
        {
          q: 'Can I see your menu online?',
          a: 'Yes! Our complete menu is available on our website at lastchancepeoria.com/menu. You can browse all our food offerings, drinks, and daily specials. We also offer a downloadable PDF version of our menu for your convenience.',
        },
        {
          q: 'Do you have daily specials?',
          a: "Yes, we feature daily food and drink specials that change regularly. Check our website's specials page or give us a call to hear about today's offerings. We also post our specials on our Facebook page, so follow us there to stay updated!",
        },
        {
          q: 'Do you offer takeout or delivery?',
          a: "Yes, we offer takeout for all menu items. Just call (309) 243-5036 to place your order and we'll have it ready for pickup. While we don't offer direct delivery, we partner with several delivery services that can bring Last Chance to your doorstep.",
        },
      ],
    },
    {
      category: 'Drinks & Bar',
      questions: [
        {
          q: 'What types of beer do you have?',
          a: 'We pride ourselves on having the coldest beer in Peoria! Our selection includes popular domestic beers, craft brews, local Illinois beers, and rotating seasonal offerings. We have multiple beers on tap plus a wide variety of bottled and canned options. Ask your bartender for recommendations!',
        },
        {
          q: 'Do you have happy hour?',
          a: 'Yes! We offer happy hour specials on select days with discounted drinks and appetizers. Times and offerings may vary, so check our specials page or call for current happy hour details.',
        },
        {
          q: 'Can I host a private party at Last Chance?',
          a: 'Yes! We can accommodate private parties and special events. Our beer garden is perfect for outdoor gatherings during warm weather. For private event inquiries, please call (309) 243-5036 to discuss your needs with our management team.',
        },
        {
          q: 'What is the legal drinking age, and do you ID?',
          a: 'The legal drinking age in Illinois is 21. Yes, we card everyone who orders alcohol and appears under 40 years old. Please have a valid government-issued photo ID ready when ordering alcoholic beverages.',
        },
      ],
    },
    {
      category: 'Entertainment & Amenities',
      questions: [
        {
          q: 'Do you have TVs for watching sports?',
          a: "Yes! We have multiple large-screen TVs throughout the bar and dining areas, making Last Chance a great place to catch the game. Whether it's football, basketball, baseball, or any other sport, we show all major sporting events.",
        },
        {
          q: 'Do you have gaming machines?',
          a: 'Yes, we have gaming machines for those 21 and over who wish to try their luck. Gaming is available during all business hours, and our staff can answer any questions you may have.',
        },
        {
          q: 'Tell me about your beer garden',
          a: "Our beer garden is a popular outdoor space perfect for enjoying food and drinks al fresco. Open during pleasant weather months, it features ample seating, lawn games, and a relaxed atmosphere. It's ideal for groups and special occasions.",
        },
        {
          q: 'Is there parking available?',
          a: 'Yes, we have a parking lot on-site with ample space for our guests. Parking is free and conveniently located right next to the building.',
        },
        {
          q: 'Is the venue wheelchair accessible?',
          a: 'Yes, Last Chance Bar & Grill is wheelchair accessible. We have accessible parking, entrance, restrooms, and seating areas to ensure all guests can comfortably enjoy their visit.',
        },
      ],
    },
    {
      category: 'Employment & Community',
      questions: [
        {
          q: 'Are you hiring?',
          a: "We're always looking for friendly, hardworking people to join our team! Positions may include bartenders, servers, kitchen staff, and more. Visit our employment page at lastchancepeoria.com/apply to submit an application online.",
        },
        {
          q: 'How can I request a donation for my organization?',
          a: 'We love supporting our local community! Visit lastchancepeoria.com/donation to submit a donation request form. We review requests regularly and do our best to support worthy causes throughout Peoria.',
        },
        {
          q: 'Do you sponsor local teams or events?',
          a: "Yes! We actively support local sports teams, schools, and community events. If you're seeking sponsorship, please submit a donation request through our website or call us at (309) 243-5036.",
        },
      ],
    },
    {
      category: 'Contact & More',
      questions: [
        {
          q: 'How can I contact Last Chance?',
          a: "You can reach us by phone at (309) 243-5036, email us at lastchancebarandgrill@yahoo.com, or visit us in person at 2713 W Second St, Peoria, IL 61615. We're also active on Facebook - search for Last Chance Bar & Grill to follow us for updates and specials.",
        },
        {
          q: 'Do you have gift certificates?',
          a: 'Yes! Gift certificates make great gifts for birthdays, holidays, or any occasion. Stop by in person or call (309) 243-5036 to purchase gift certificates in any amount.',
        },
        {
          q: 'Can I leave feedback about my experience?',
          a: 'Absolutely! We value customer feedback. You can leave a review on our Facebook page, Google, or other review platforms. You can also speak directly with a manager during your visit or email us at lastchancebarandgrill@yahoo.com.',
        },
        {
          q: 'Are pets allowed?',
          a: 'Service animals are always welcome. For regular pets, we allow well-behaved dogs in our outdoor beer garden area during appropriate weather. Pets are not permitted inside the building per health regulations.',
        },
      ],
    },
  ]

  return (
    <PageLayout
      title="Frequently Asked Questions"
      description="Everything you need to know about Last Chance Bar & Grill"
      containerSize="lg"
    >
      <div className={styles.faqIntro}>
        <Text as="p" size="lg" className={styles.faqIntroParagraph}>
          Have questions about Last Chance Bar & Grill? We&apos;ve compiled answers
          to our most frequently asked questions below. If you don&apos;t find what
          you&apos;re looking for, feel free to{' '}
          <a href="tel:309-243-5036">call us at (309) 243-5036</a> or{' '}
          <a href="mailto:lastchancebarandgrill@yahoo.com">send us an email</a>.
          We&apos;re always happy to help!
        </Text>
      </div>

      {faqs.map((category, idx) => (
        <section key={idx} className={styles.faqCategory}>
          <Text as="h2" size="2xl" weight="bold" className={styles.faqCategoryTitle}>
            {category.category}
          </Text>
          <div className={styles.faqGrid}>
            {category.questions.map((faq, qIdx) => (
              <Card key={qIdx} className={styles.faqCard}>
                <Text as="h3" size="lg" weight="bold" className={styles.faqQuestion}>
                  {faq.q}
                </Text>
                <Text as="p" size="base" className={styles.faqAnswer}>
                  {faq.a}
                </Text>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.faqContact}>
        <Text as="h2" size="2xl" weight="bold" className={styles.aboutHeading}>
          Still Have Questions?
        </Text>
        <Text as="p" size="lg" className={styles.aboutParagraph}>
          If you didn&apos;t find the answer you were looking for, we&apos;re here to
          help! Give us a call at <a href="tel:309-243-5036">(309) 243-5036</a>, send
          an email to{' '}
          <a href="mailto:lastchancebarandgrill@yahoo.com">
            lastchancebarandgrill@yahoo.com
          </a>
          , or stop by in person at 2713 W Second St, Peoria, IL 61615. Our friendly
          staff is always ready to assist you.
        </Text>
      </section>
    </PageLayout>
  )
}
