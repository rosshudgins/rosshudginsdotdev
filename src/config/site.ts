import type { SiteConfig } from '@/types'

const siteConfig: SiteConfig = {
  meta: {
    title: 'Ross Hudgins',
    description: 'Backend software developer. Writing about software, books, and whatever else.',
    author: 'Ross Hudgins',
    logo: '/logo.svg',
    language: 'en',
    lang: 'en',
    url: 'https://rosshudgins.dev',
    ogImage: '/og-image.png',
    twitterCreator: '@rosshudgins',
  },

  navigation: [
    { label: 'Home', subLabel: 'Index', href: '/' },
    { label: 'Writing', subLabel: 'Blog', href: '/posts' },
    { label: 'Projects', subLabel: 'Works', href: '/projects' },
    { label: 'About', subLabel: 'Me', href: '/about' },
  ],

  social: [
    { name: 'GitHub', href: 'https://github.com/rosshudgins', icon: 'mdi:github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/michaelrosshudgins/', icon: 'mdi:linkedin' },
    { name: 'Twitter', href: 'https://www.twitter.com/rosshudgins', icon: 'mdi:twitter' },
    { name: 'Instagram', href: 'https://www.instagram.com/rosshudgins', icon: 'mdi:instagram' },
    { name: 'Facebook', href: 'https://www.facebook.com/ross.hudgins/', icon: 'mdi:facebook' },
    { name: 'Email', href: 'mailto:ross@rosshudgins.dev', icon: 'mdi:email' }, // ← update with real email
  ],

  hero: {
    greeting: "👋 Hey, I'm Ross",
    description: 'Backend software developer based in Longmont, CO. I write about software, books, music, and craft beer.',
    infos: [
      { label: 'Status', value: 'Building things' },       // ← update as you like
      { label: 'Location', value: 'Longmont, Colorado' },
    ],
    cards: [],
  },

  footer: {
    copyright: '© Ross Hudgins',
    credit: 'Built with Breeze & Astro',
  },

  features: {
    search: true,
    rss: true,
  },

  comments: {
    enabled: false,
  },
  tools: [
    { name: 'TypeScript', description: 'Typed JavaScript at scale' },
    { name: 'Python', description: 'Data, ML, and scripting' },
    { name: 'Astro', description: 'This site' },
    { name: 'Postgres', description: 'Primary database' },
    { name: 'Docker', description: 'Containerization' },
  ],

  labels: {
    latestPosts: 'Latest',
    viewAll: 'View all',
    categories: 'categories',
    tags: 'tags',
    tools: 'tools',    search: 'Search',
    noResults: 'No results found.',
    toc: 'On this page',
    notFoundTitle: '',
    notFoundDescription: '',
    goHome: '',
  },
}

export default siteConfig
