import { CallToActionProps, FAQsProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on FAQs page *******************
export const heroFaqs: HeroProps = {
  title: 'Frequently Asked Questions',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Whether you need help using our Next.js and Tailwind CSS templates, solving problems, or just want some useful tips, our FAQs are here to assist you.`}
      </span>{' '}
      Explore them to optimize your experience with our website and products.
    </>
  ),
  tagline: 'Demo FAQs Page',
};

// FAQS4 data on FAQs page *******************
export const faqs4Faqs: FAQsProps = {
  id: 'faqsFour-on-faqs',
  hasBackground: true,
  header: {
    title: 'Find what you need',
    subtitle: 'Get quick answers to your questions: Everything you need in one spot.',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'How to install the NextJS + Tailwind CSS template?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'If you could only ask one question to each person you meet, what would that question be?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'What are my payment options?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
        },
      ],
    },
  ],
};

// CallToAction data on FAQs page *******************
export const callToActionFaqs: CallToActionProps = {
  id: 'callToAction-on-faqs',
  hasBackground: true,
  title: 'Still have questions?',
  subtitle:
    `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
