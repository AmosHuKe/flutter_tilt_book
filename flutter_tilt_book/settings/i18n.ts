type I18nSettingsType = {
  locales: ReadonlyArray<string>
  defaultLocale: ReadonlyArray<string>[number]
}

export const I18nSettings: I18nSettingsType = {
  // @see https://next-intl.dev/docs/routing
  locales: ["en", "zh"],
  defaultLocale: "en",
}
