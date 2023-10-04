import React from "react"
import { usePathname } from "next/navigation"
import { DocsThemeConfig } from "nextra-theme-docs"
import site from "config/site"

const config: DocsThemeConfig = {
  logo: <span>Tifan's Personal Docs</span>,
  useNextSeoProps() {
    if (usePathname() !== "/") {
      return {
        titleTemplate: "%s - Tifan's Personal Docs",
      }
    }
    return {
      title: "Tifan's Docs",
    }
  },
  head: () => {
    const url = "https://docs.tifan.me" + usePathname()

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={site.name} />
        <meta property="og:description" content={site.description} />
      </>
    )
  },
  project: {
    link: "https://github.com/tifandotme/docs",
  },
  docsRepositoryBase: "https://github.com/tifandotme/docs",
  footer: {
    text: "It's all yours.",
  },
}

export default config
