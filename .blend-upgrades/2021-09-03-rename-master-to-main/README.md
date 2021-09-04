.github/workflows/release.yml:
  master -> main

package.json:
  release: {
    ...
    "branches": [
      "+([0-9])?(.{+([0-9]),x}).x",
      "main",
      "next",
      "next-major",
      {
        "name": "beta",
        "prerelease": true
      },
      {
        "name": "alpha",
        "prerelease": true
      }
    ]
  }