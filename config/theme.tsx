import { usePathname } from "next/navigation"
import { DocsThemeConfig } from "nextra-theme-docs"
import site from "config/site"
import { Docs } from "components/icons"

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
    >
      Tifan's Personal Docs
    </span>
  ),
  useNextSeoProps() {
    if (usePathname() !== "/") {
      return {
        titleTemplate: "%s - Tifan's Personal Docs",
      }
    } else {
      return {
        title: "Tifan's Docs",
      }
    }
  },
  head: () => {
    const url = "https://docs.tifan.me" + usePathname()

    return (
      <>
        <link href="/dist/main.css" rel="stylesheet" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={site.name} />
        <meta property="og:description" content={site.description} />
      </>
    )
  },
  docsRepositoryBase: "https://github.com/tifandotme/docs",
}

export default config
