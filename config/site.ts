import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = 'https://github.com/weijunext/landing-page-boilerplate'

const baseSiteConfig = {
  name: "AI Chat Powerkit",
  description:
    "Boost your ChatGPT productivity with bulk chat management, folders, exports, and power-user tools. Organize, clean up, and customize your ChatGPT experience effortlessly.",
  url: "https://www.chatgptpowerkit.com",
  ogImage: "https://www.chatgptpowerkit.com/og.png",
  metadataBase: '/',
  keywords: [
    "chatgpt extension",
    "chatgpt productivity",
    "chatgpt bulk delete",
    "chatgpt folders",
    "chatgpt export",
    "chatgpt power tools"
  ],
  authors: [
    {
      name: "AI Chat Powerkit",
      url: "/",
    }
  ],
  creator: 'Sam Liu',
  extensionUrl: '/#',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/weijunext", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "samliu720@gmail.com", icon: MdEmail },
  ],
  footerProducts: [
    { url: '/privacy-policy', name: 'Privacy Policy' },
    { url: '/terms', name: 'Terms of Services' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
