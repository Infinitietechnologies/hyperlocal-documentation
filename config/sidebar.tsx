import {
  Bike,
  BookOpen,
  ChevronsLeftRightEllipsis,
  Search,
  ShieldUser,
  Smartphone,
  Store,
  Users,
} from 'lucide-react';

export const sidebarNav = [
  {
    title: 'Introduction',
    icon: <BookOpen className="h-5 w-5" />,
    defaultOpen: true,
    href: '/introduction',
    pages: [],
  },
  // {
  //   title: 'Getting Started',
  //   icon: <Rocket className="h-5 w-5" />,
  //   defaultOpen: false,
  //   pages: [
  //     {
  //       title: 'Installation',
  //       href: '/getting-started/installation',
  //     },
  //     {
  //       title: 'Quick Start',
  //       href: '/getting-started/quick-start',
  //     },
  //   ],
  // },
  {
    title: 'Admin Panel',
    icon: <ShieldUser className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/admin-panel/introduction',
      },
      {
        title: 'Prerequisites',
        href: '/admin-panel/prerequisites',
      },
      {
        title: 'Google Cloud Setup',
        href: '/admin-panel/google-cloud-setup',
      },
      {
        title: 'Installation',
        href: '/admin-panel/installation',
      },
      {
        title: 'Overview',
        href: '/admin-panel/overview',
      },
    ],
  },
  {
    title:'Seller Panel',
    icon: <ShieldUser className="h-5 w-5" />,
    defaultOpen: true,
    pages:[
      {
        title:'Overview',
        href:'/seller-panel/overview',
      }
    ]
  },
  {
    title: 'Customer Web',
    icon: <ChevronsLeftRightEllipsis className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/customer-web/introduction',
      },
      {
        title: 'Prerequisites',
        href: '/customer-web/prerequisites',
      },
      {
        title: 'Theme',
        href: '/customer-web/theme',
      },
      {
        title: 'Installation',
        href: '/customer-web/installation',
      },
      {
        title: 'Plugins',
        href: '/customer-web/plugins',
      },
      {
        title: 'Deployment',
        href: '/customer-web/deployment',
      },
    ],
  },
  {
    title: 'Mobile Apps',
    icon: <Smartphone className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Overview',
        href: '/mobile-apps/overview',
      },
      {
        title: 'Flutter Setup',
        href: '/mobile-apps/flutter-setup',
      },
    ],
  },
  {
    title: 'Customer App',
    icon: <Users className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/mobile-apps/customer-app/introduction',
      },
      {
        title: 'Prerequisites',
        href: '/mobile-apps/customer-app/prerequisites',
      },
      // {
      //   title: 'Installation',
      //   href: '/mobile-apps/customer-app/installation',
      // },
      {
        title: 'Configuration',
        href: '/mobile-apps/customer-app/configuration',
        pages: [
          {
            title: 'App Package / Bundle Name',
            href: '/mobile-apps/customer-app/custom-changes/app-package-name',
          },
          {
            title: 'App Logo',
            href: '/mobile-apps/customer-app/custom-changes/app-logo',
          },
          {
            title: 'App Name',
            href: '/mobile-apps/customer-app/custom-changes/app-name',
          },
          {
            title: 'App URL',
            href: '/mobile-apps/customer-app/custom-changes/app-url',
          },
          {
            title: 'Firebase Client ID',
            href: '/mobile-apps/customer-app/custom-changes/firebase-client-id',
          },
          {
            title: 'Android Maps Key',
            href: '/mobile-apps/customer-app/custom-changes/android-maps-key',
          },
          {
            title: 'iOS Maps Key',
            href: '/mobile-apps/customer-app/custom-changes/ios-maps-key',
          },
        ],
      },
      // {
      //   title: 'Custom Changes',
      //   href: '/mobile-apps/customer-app/custom-changes',
      //   pages: [
      //     {
      //       title: 'App Logo',
      //       href: '/mobile-apps/customer-app/custom-changes/app-logo',
      //     },
      //     {
      //       title: 'App Name',
      //       href: '/mobile-apps/customer-app/custom-changes/app-name',
      //     },
      //     {
      //       title: 'App URL',
      //       href: '/mobile-apps/customer-app/custom-changes/app-url',
      //     },
      //     {
      //       title: 'Firebase Client ID',
      //       href: '/mobile-apps/customer-app/custom-changes/firebase-client-id',
      //     },
      //     {
      //       title: 'Android Maps Key',
      //       href: '/mobile-apps/customer-app/custom-changes/android-maps-key',
      //     },
      //     {
      //       title: 'iOS Maps Key',
      //       href: '/mobile-apps/customer-app/custom-changes/ios-maps-key',
      //     },
      //   ],
      // },
    ],
  },
  {
    title: 'Seller App',
    icon: <Store className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/mobile-apps/seller-app/introduction',
      },
      {
        title: 'Prerequisites',
        href: '/mobile-apps/seller-app/prerequisites',
      },
      {
        title: 'Configuration',
        href: '/mobile-apps/seller-app/configuration',
      },
    ],
  },
  {
    title: 'Delivery App',
    icon: <Bike className="h-5 w-5" />,
    defaultOpen: true,
    pages: [
      {
        title: 'Introduction',
        href: '/mobile-apps/delivery-app/introduction',
      },
      {
        title: 'Prerequisites',
        href: '/mobile-apps/delivery-app/prerequisites',
      },
      {
        title: 'Configuration',
        href: '/mobile-apps/delivery-app/configuration',
      },
    ],
  },
  // {
  //   title: 'Search Bar',
  //   icon: <Search className="h-5 w-5" />,
  //   defaultOpen: true,
  //   href: '/search-bar',
  //   pages: [],
  // },
  // {
  //   title: 'Components',
  //   icon: <Component className="h-5 w-5" />,
  //   defaultOpen: false,
  //   pages: [
  //     {
  //       title: 'Button',
  //       href: '/components/button',
  //     },
  //     {
  //       title: 'Input',
  //       href: '/components/input',
  //     },
  //     {
  //       title: 'Label',
  //       href: '/components/label',
  //     },
  //     {
  //       title: 'Checkbox',
  //       href: '/components/checkbox',
  //     },
  //     {
  //       title: 'Search Button',
  //       href: '/components/search-button',
  //     },
  //     {
  //       title: 'Tabs',
  //       href: '/components/tabs',
  //     },
  //     {
  //       title: 'Sidebar',
  //       href: '/components/sidebar',
  //     },
  //     {
  //       title: 'Steps',
  //       href: '/components/steps',
  //     },
  //     {
  //       title: 'Syntax Highlighter',
  //       href: '/components/syntax-highlighter',
  //     },
  //     {
  //       title: 'Folder Tree',
  //       href: '/components/folder-tree',
  //     },
  //     {
  //       title: 'Note',
  //       href: '/components/note',
  //     },
  //     {
  //       title: 'Menu',
  //       href: '/components/menu',
  //     },
  //     {
  //       title: 'Popover',
  //       href: '/components/popover',
  //     },
  //     {
  //       title: 'Dialog',
  //       href: '/components/dialog',
  //     },
  //     {
  //       title: 'Select',
  //       href: '/components/select',
  //     },
  //   ],
  // },
  // {
  //   title: 'Customization',
  //   icon: <Wrench className="h-5 w-5" />,
  //   defaultOpen: false,
  //   pages: [
  //     {
  //       title: 'Sidebar',
  //       href: '/customization/sidebar',
  //     },
  //     {
  //       title: 'Toc',
  //       href: '/customization/toc',
  //     },
  //     {
  //       title: 'Font',
  //       href: '/customization/font',
  //     },
  //     {
  //       title: 'SEO and Social Sharing',
  //       href: '/customization/seo-and-social-sharing',
  //     },
  //   ],
  // },
];

export const getSidebarNavForPath = (currentPath: string) => {
  const normalize = (path: string | undefined) => {
    if (!path) return '';
    return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
  };

  const normalizedCurrent = normalize(currentPath);

  return sidebarNav.map((section) => {
    const sectionHref = normalize((section as any).href);
    const pages = (section as any).pages || [];

    const matchesSection =
      !!sectionHref &&
      (normalizedCurrent === sectionHref ||
        normalizedCurrent.startsWith(sectionHref + '/'));

    const matchesChild = pages.some((p: { href?: string }) => {
      const pageHref = normalize(p?.href);
      return (
        !!pageHref &&
        (normalizedCurrent === pageHref ||
          normalizedCurrent.startsWith(pageHref + '/'))
      );
    });

    const shouldOpen = matchesSection || matchesChild;

    return {
      ...section,
      defaultOpen: shouldOpen || section.defaultOpen,
    } as typeof section;
  });
};
