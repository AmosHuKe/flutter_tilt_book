type VersionSettingsType = {
  versions: ReadonlyArray<string>
  latestVersion: ReadonlyArray<string>[number]
}

const versions = ["v4", "v3"]

export const VersionSettings: VersionSettingsType = {
  versions,
  latestVersion: versions[0],
}
