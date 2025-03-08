import { Metadata } from "next";

export const siteConfig = {
  name: "WealthIdk",
  description: "A platform for Idk",
  url: "https://tbd.com",
  ogImage: "https://tbd.com/og.jpg",
  links: {
    github: "https://github.com/code-like-crazy/bebicats",
  },
} as const;

export const siteMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Araf A Alam",
      url: "https://github.com/code-like-crazy",
    },
  ],
  creator: "Araf A Alam",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
};
