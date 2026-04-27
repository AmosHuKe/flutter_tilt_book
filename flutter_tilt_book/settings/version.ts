type VersionSettingsType = {
  versions: ReadonlyArray<string>
  latestVersion: ReadonlyArray<string>[number]
}

export const VersionSettings: VersionSettingsType = {
  versions: ["v4", "v3"],
  latestVersion: "v4",
}
