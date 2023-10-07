import { usePathname } from "next/navigation"
import { DocsThemeConfig } from "nextra-theme-docs"
import site from "config/site"

const config: DocsThemeConfig = {
  logo: (
    <span
      style={{
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
    >
      {site.name}
    </span>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s - " + site.name,
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
  docsRepositoryBase: "https://github.com/tifandotme/docs",
}

export default config
