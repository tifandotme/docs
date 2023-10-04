import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./config/theme.tsx",
})

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
}

export default withNextra(config)
