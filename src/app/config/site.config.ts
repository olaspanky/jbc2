// config/site.config.ts
export const siteConfig = {
  name: "Jericho Businessmen Club Ibadan",
  description: "Empowering professionals and technocrats for the economic and social development of Ibadan.",
  
  navItems: [
    { label: 'Home', href: '/' },
    { 
      label: 'About', 
      href: '/jbc/about',
      dropdown: [
        { label: 'Who We Are', href: '/jbc/about?section=whoweare' },
        { label: 'Our History', href: '/jbc/about?section=history' },
        { label: 'Stakeholders & Strategy', href: '/jbc/about?section=stake' },
        { label: 'Projects & Activities', href: '/jbc/about?section=projects' }
      ]
    },
    { label: 'Initiatives', href: '/jbc/initiatives' },
    { label: 'News', href: '/jbc/news' },
    { label: 'Contact', href: '/jbc/contact' }
  ],

  socialLinks: [
    { platform: 'facebook' as const, href: 'https://facebook.com/jbc-ibadan' },
    { platform: 'twitter' as const, href: 'https://twitter.com/jbc-ibadan' },
    { platform: 'instagram' as const, href: 'https://instagram.com/jbc-ibadan' },
    { platform: 'linkedin' as const, href: 'https://linkedin.com/company/jbc-ibadan' }
  ],

  footerLinks: {
    about: [
      { label: 'Who We Are', href: '/jbc/about?section=whoweare' },
      { label: 'Our History', href: '/jbc/about?section=history' },
      { label: 'Stakeholders & Strategy', href: '/jbc/about?section=stake' },
      { label: 'Projects & Activities', href: '/jbc/about?section=projects' }
    ],
    initiatives: [
      { label: 'Community Projects', href: '/jbc/initiatives#projects' },
      { label: 'Education Programs', href: '/jbc/initiatives#education' },
      { label: 'Business Support', href: '/jbc/initiatives#business' },
      { label: 'Youth Empowerment', href: '/jbc/initiatives#youth' }
    ],
    resources: [
      { label: 'Blog', href: '/jbc/blog' },
      { label: 'Events', href: '/jbc/events' },
      { label: 'Newsletter', href: '/jbc/newsletter' },
      { label: 'Contact Us', href: '/jbc/contact' }
    ]
  }
};