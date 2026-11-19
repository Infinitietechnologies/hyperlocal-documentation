type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

// Your TocData object with the correct types
export const TocData: TocData = {
  introduction: [
    {
      title: 'Welcome to Hyper Local',
      href: '/introduction#welcome-to-pinexio',
      pages: [
        {
          title: 'Why Choose Hyper Local',
          href: '/introduction#why-choose-pinexio',
        },

        {
          title: 'What Makes Hyper Local Special',
          href: '/introduction#what-makes-pinexio-special',
        },
      ],
    },
  ],
  'getting-started/installation': [
    {
      title: 'Steps to install',
      href: '/getting-started/installation',
    },
  ],
  'components/folder-tree': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/folder-tree#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/folder-tree#props',
    },
  ],
  'components/button': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/button#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/button#props',
    },
  ],
  'components/note': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/note#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/note#props',
    },
  ],
  'components/search-button': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/search-button#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/search-button#props',
    },
  ],
  'components/sidebar': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/sidebar#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/sidebar#props',
    },
  ],
  'components/steps': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/steps#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/steps#props',
    },
  ],
  'components/syntax-highlighter': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/syntax-highlighter#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/syntax-highlighter#props',
    },
  ],
  'components/tabs': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/tabs#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/tabs#props',
    },
  ],
  'components/menu': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/menu#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/menu#props',
    },
  ],
  'components/popover': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/popover#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/popover#props',
    },
  ],
  'components/dialog': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/dialog#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/dialog#props',
    },
  ],
  'components/select': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/select#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/select#props',
    },
  ],
  'components/input': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/input#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/input#props',
    },
  ],
  'components/checkbox': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/checkbox#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/checkbox#props',
    },
  ],
  'components/label': [
    {
      title: 'Preview & Code Snippet',
      href: '/components/label#preview-and-code-snippet',
    },
    {
      title: 'Props',
      href: '/components/label#props',
    },
  ],

  'search-bar': [
    {
      title: 'How it works',
      href: '/search-bar#-how-it-works',
    },
    {
      title: 'Key Features',
      href: '/search-bar#-key-features',
    },
    {
      title: 'Customization',
      href: '/search-bar#-customization',
    },
    {
      title: 'Code Snippet: search highlight',
      href: '/search-bar#-code-snippet-search-highlighting',
    },
    {
      title: 'Visual Preview',
      href: '/search-bar#-visual-preview',
    },
    {
      title: 'Why this is cool',
      href: '/search-bar#-why-this-is-cool',
    },
  ],
  'customization/font': [
    {
      title: 'Location of Font Definition',
      href: '/customization/font#location-of-font-definition',
    },
    {
      title: 'Applying Font Globally',
      href: '/customization/font#applying-the-font-globally',
    },
    {
      title: 'Font Size & Config',
      href: '/customization/font#modifying-font-size--tailwind-config',
    },
    {
      title: 'Font Weight',
      href: '/customization/font#customizing-font-weight',
    },
    {
      title: 'Summary',
      href: '/customization/font#summary',
    },
  ],
  'customization/sidebar': [
    {
      title: 'Folder Structure',
      href: '/customization/sidebar#folder-structure',
    },
    {
      title: 'How to make changes',
      href: '/customization/sidebar#editing-sidebar-navigation',
    },
    {
      title: 'Where is Sidebar Renderer?',
      href: '/customization/sidebar#where-is-the-sidebar-rendered',
    },
    {
      title: 'Summary',
      href: '/customization/sidebar#summary',
    },
  ],
  'customization/toc': [
    {
      title: 'Folder Structure',
      href: '/customization/toc#folder-structure',
    },
    {
      title: 'How to make changes',
      href: '/customization/toc#editing-table-of-contents-toc',
    },
    {
      title: 'Where is Toc Renderer?',
      href: '/customization/toc#where-is-the-TOC-rendered',
    },
    {
      title: 'Summary',
      href: '/customization/toc#summary',
    },
  ],
  'customization/seo-and-social-sharing': [
    {
      title: 'Why metadata matters',
      href: '/customization/seo-and-social-sharing#why-metadata-matters',
    },
    {
      title: 'Configuring Metadata',
      href: '/customization/seo-and-social-sharing#configuring-metadata-in-nextjs',
    },
  ],
  'getting-started/quick-start': [
    {
      title: 'Create your MDX file and add metadata',
      href: '/getting-started/quick-start#create-your-mdx-file-and-add-metadata',
    },
    {
      title: 'Start Writing',
      href: '/getting-started/quick-start#start-writing',
    },
  ],
  // Customer Web section (customer-web)
  'customer-web/installation': [
    {
      title: 'Get the tools and source files',
      href: '/customer-web/installation#get-the-tools-and-source-files',
    },
    {
      title: 'Configure your site',
      href: '/customer-web/installation#configure-your-site',
    },
    {
      title: 'Open the storefront',
      href: '/customer-web/installation#open-the-storefront',
    },
  ],
  'customer-web/plugins': [
    {
      title: 'Flash Sales',
      href: '/customer-web/plugins#flash-sales',
    },
    {
      title: 'Install or update',
      href: '/customer-web/plugins#install-or-update',
    },
    {
      title: 'List installed plugins',
      href: '/customer-web/plugins#list-installed-plugins',
    },
    {
      title: 'Remove one plugin',
      href: '/customer-web/plugins#remove-one-plugin',
    },
    {
      title: 'Undo or recover',
      href: '/customer-web/plugins#undo-or-recover',
    },
  ],
  'customer-web/deployment': [
    {
      title: 'Static Export',
      href: '/customer-web/deployment#static-export',
      pages: [
        {
          title: 'Automatic upload with FTP',
          href: '/customer-web/deployment#automatic-upload-with-ftp',
        },
        {
          title: 'Manual upload',
          href: '/customer-web/deployment#manual-upload',
        },
      ],
    },
    {
      title: 'Server deployment (SSR)',
      href: '/customer-web/deployment#server-deployment-ssr',
    },
    {
      title: 'After publishing',
      href: '/customer-web/deployment#after-publishing',
    },
  ],
  'customer-web/prerequisites': [
    {
      title: 'Admin Panel setup',
      href: '/customer-web/prerequisites#1-admin-panel-setup',
    },
    {
      title: 'Firebase configuration',
      href: '/customer-web/prerequisites#2-firebase-configuration-through-admin-panel',
    },
    {
      title: 'Push Notifications',
      href: '/customer-web/prerequisites#configuring-push-notifications',
    },
    {
      title: 'Map setup',
      href: '/customer-web/prerequisites#3-map-setup',
    },
    {
      title: 'Final checklist',
      href: '/customer-web/prerequisites#4-final-checklist',
    },
  ],
  'customer-web/theme': [
    {
      title: 'Change branding in the Admin Panel',
      href: '/customer-web/theme#change-branding-in-the-admin-panel',
    },
    {
      title: 'Change defaults in your web project',
      href: '/customer-web/theme#change-defaults-in-your-web-project',
      pages: [
        {
          title: 'Theme configuration file',
          href: '/customer-web/theme#theme-configuration-file',
        },
      ],
    },
    {
      title: 'Review and publish',
      href: '/customer-web/theme#review-and-publish',
    },
  ],
};
