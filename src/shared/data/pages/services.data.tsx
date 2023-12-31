import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconChevronsRight,
  IconComponents,
  IconListCheck,
  IconRocket,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Elevate your projects with our stunning templates',
  subtitle:
    'Donec aliquam pharetra nibh quis vestibulum. Praesent hendrerit sem at lacus ullamcorper egestas. Morbi lacinia ipsum in nulla gravida, ac sagittis turpis pretium. ',
  callToAction: {
    text: 'Start Exploring',
    href: 'https://github.com/ShengmingHu/NauCompany',
    targetBlank: true,
  },
  image: {
    src: heroImg,
    alt: 'Hero NauCompany',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Services',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Demo description',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Demo description',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconBulb,
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Service people',
      description:
        "Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.",
    },
    {
      title: 'Service People',
      description:
        `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
    },
    {
      title: 'Service People3',
      description:
        `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  content:
    "Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.",
  items: [
    {
      title: 'Service people',
    },
    {
      title: 'Service People',
    },
    {
      title: 'Service People3',
    },
    {
      title: 'Service people',
    },
    {
      title: 'Service People',
    },
    {
      title: 'Service People3',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: true,
};

// Feature4 data on Services page *******************
export const features4Services: FeaturesProps = {
  id: 'featuresFour-on-services',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Main Features',
    subtitle:
      'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  },
  isImageDisplayed: true,
  image: {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    alt: 'Hero NauCompany',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Demo description',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Demo description',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Satisfied Client Experiences',
    subtitle:
      `"Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction."`,
  },
  testimonials: [
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `I had never found it so easy to customize a website. NauCompany's templates are incredibly flexible, and with Tailwind CSS, I've managed to give my website the look and feel I always wanted. Highly recommended!`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Sarah Johnson',
      job: 'Business Owner',
      testimonial: `They've not only saved me a ton of time but have also made my websites look incredibly professional. The level of detail and thought that went into designing these templates is truly impressive.`,
      image: {
        src: 'https://images.unsplash.com/photo-1572417884940-c24659be6068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Sarah Johnson',
      },
      href: '/',
    },
    {
      name: 'Lisa Gordon',
      job: 'Project Manager',
      testimonial: `Their templates are not only stunning but also user-friendly. The support I received from their community has been exceptional. I'm proud to say that I've built my dream website with NauCompany.`,
      image: {
        src: 'https://images.unsplash.com/photo-1665984867752-6370ab5ae35e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Lisa Gordon',
      },
      href: '/',
    },
  ],
  callToAction: {
    targetBlank: true,
    text: 'More testimonials...',
    href: '/',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Answers to Common Queries',
    subtitle:
      'Etiam laoreet mi eros, vitae iaculis mi egestas blandit. Sed nisl diam, congue sed justo et, cursus sollicitudin ligula.',
  },
  columns: 1,
  items: [
    {
      title: 'Can I customize the templates to match my brand?',
      description: `Ut accumsan, massa at sagittis maximus, libero justo rhoncus metus, quis finibus neque justo quis nisi. Suspendisse sed sapien et justo iaculis faucibus.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What if I need help customizing the template?',
      description: `Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent imperdiet ultricies ex consequat egestas.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Are there setup guides available?',
      description: `Exceeding expectations in customer service is not just about meeting needs, it's about creating memorable experiences that foster loyalty and satisfaction.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can I hire you for template customization?',
      description: `Phasellus est quam, mollis tincidunt dictum pulvinar, tempor vel justo. Mauris eu lobortis leo. Proin pretium arcu lectus, a mattis nisi fermentum quis.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
