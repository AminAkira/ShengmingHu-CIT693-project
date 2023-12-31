import { ComparisonProps, FAQsProps, PricingProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Pricing page *******************
export const heroPricing: HeroProps = {
  title: 'Plans and Prices',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Here, you'll find a clear breakdown of our service plans and their respective features. Whether you're a small
        business or a large enterprise, we have options tailored to your needs.`}
      </span>{' '}
      You can choose the plan that best suits your goals!
    </>
  ),
  tagline: 'Demo Pricing Page',
};

// Pricing data on Pricing page *******************
export const pricingPricing: PricingProps = {
  id: 'pricing-on-pricing',
  hasBackground: true,
  header: {
    title: 'Our plans',
    subtitle: (
      <>
        Discover our flexible pricing options designed to fit your needs perfectly.{' '}
        <span className="hidden md:inline">{`No matter the size of your project, we have the right plan for you.`}</span>
      </>
    ),
  },
  prices: [
    {
      title: 'basic',
      subtitle: 'Optimal choice for personal use',
      price: 29,
      period: 'per month',
      items: [
        {
          description: 'Access to a selection of professionally designed website templates.',
        },
        {
          description: 'Email support to assist you with any questions or issues.',
        },
        {
          description: 'Adequate storage space for small to medium-sized websites.',
        },
        {
          description: 'Core features for a functional online presence, such as SEO tools and contact forms.',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      subtitle: 'Optimal choice for small teams',
      price: 69,
      period: 'per month',
      items: [
        {
          description: 'A larger variety of premium website templates to choose from.',
        },
        {
          description: 'Faster response times and priority customer support.',
        },
        {
          description: 'More storage space to accommodate growing websites and content.',
        },
        {
          description: 'Enable e-commerce capabilities to sell products or services online.',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      subtitle: 'Optimal choice for companies',
      price: 199,
      period: 'per month',
      items: [
        {
          description: 'Access to exclusive and customizable premium website templates.',
        },
        {
          description: 'Round-the-clock customer support for immediate assistance.',
        },
        {
          description: 'No limits on storage, ideal for extensive websites and media.',
        },
        {
          description: 'Advanced SEO, analytics, and marketing tools for optimal performance and growth.',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison pricing data on Pricing page *******************
export const comparisonPricing: ComparisonProps = {
  id: 'comparison-on-pricing',
  hasBackground: false,
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // tagline: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
  ],
};

// FAQS3 data on Pricing page *******************
export const faqs3Pricing: FAQsProps = {
  id: 'faqsThree-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // tagline: 'FAQS',
    position: 'left',
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
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
