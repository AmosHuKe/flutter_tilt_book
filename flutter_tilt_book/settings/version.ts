type VersionSettingsType = {
  versions: ReadonlyArray<string>
  latestVersion: ReadonlyArray<string>[number]
}

const versions = ["v3", "v4-rc"]

export const VersionSettings: VersionSettingsType = {
  versions,
  latestVersion: versions[0],
}
