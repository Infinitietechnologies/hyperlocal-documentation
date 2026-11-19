export const meta = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEB_URL || '/'),
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/logos/hyper-local-favicon.png',
    },
    {
      rel: 'shortcut icon',
      url: '/logos/hyper-local-favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/logos/hyper-local-favicon.png',
    },
  ],
  title: 'Hyper Local - Production Setup Documentation',
  description:
    'Comprehensive documentation for Hyper Local — a powerful multi-vendor on-demand delivery platform. Learn how to set up, configure, and deploy Hyper Local to production using Next.js, Laravel, Tailwind CSS, and Flutter.',
  authors: [{ name: 'Dharmik Parmar' }],
  keywords: [
    // Core brand & system
    'Hyper Local',
    'HyperLocal app',
    'HyperLocal delivery system',
    'Hyper Local documentation',
    'Hyper Local setup guide',
    'Hyper Local platform',
    'Hyper Local production setup',

    // Tech stack & developer terms
    'Next.js delivery app',
    'Flutter delivery app',
    'Laravel backend integration',
    'Tailwind CSS UI design',
    'Flutter mobile app',
    'React frontend development',
    'JavaScript fullstack project',
    'Firebase integration guide',

    // Delivery & business categories
    'on-demand delivery platform',
    'multi-vendor delivery system',
    'local delivery app',
    'grocery delivery app',
    'food delivery app',
    'medicine delivery app',
    'parcel delivery app',
    'hyperlocal marketplace',
    'quick commerce app',
    'instant delivery platform',
    'blinkit clone',
    'swiggy instamart alternative',
    'dunzo clone',
    'zepto like app',
    'multi-vendor eCommerce',
    'delivery management system',
    'online ordering platform',
    'real-time delivery tracking',
    'delivery route optimization',

    // Deployment & setup
    'Next.js production deployment',
    'Laravel API deployment',
    'CI/CD for delivery app',
    'Vercel hosting setup',
    'server optimization guide',

    // Competitors & discovery
    'Blinkit',
    'Swiggy Instamart',
    'Zepto',
    'Dunzo',
    'Zomato Market',
    'Locofy',
    'TownBasket',
    'HyprGo',

    // Developer-focused
    'developer documentation',
    'setup tutorial',
    'delivery platform source code',
    'open source delivery system',
  ],
  publisher: 'Dharmik Parmar',
  creator: 'Dharmik Parmar',
  openGraph: {
    type: 'website',
    title: 'Hyper Local - Complete Production Setup Guide',
    description:
      'Step-by-step documentation for installing, configuring, and deploying the Hyper Local multi-vendor on-demand delivery system to production. Built with Next.js, Laravel, Tailwind CSS, and Flutter.',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Hyper Local Production Setup Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hyper Local - Setup & Deployment Documentation',
    description:
      'Official Hyper Local documentation that guides developers through environment setup, Firebase integration, and production deployment using Next.js, Laravel, Tailwind CSS, and Flutter.',
    images: ['/og_image.png'],
    creator: '@Dharmik029',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_WEB_URL,
  },
  robots: 'index, follow',
  hreflang: {
    en: process.env.NEXT_PUBLIC_WEB_URL,
  },
};
