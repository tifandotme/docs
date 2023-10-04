/** @type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const importConfig = {
  importOrder: [
    "",
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "^(config/.*)?$",
    "^(components/.*)?$",
    "",
    "^[.]",
  ],
}

/** @type {import("prettier").Options} */
const config = {
  ...importConfig,

  semi: false,

  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}

export default config
