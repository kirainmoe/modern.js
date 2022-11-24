---
sidebar_position: 8
---

```
Usage: modern upgrade [options]

upgrade Modern.js to latest version.

Options:
  --registry <registry>  specify npm registry (default: "")
  -d,--debug             using debug mode to log something (default: false)
  --cwd <cwd>            app directory (default: "")
  -h, --help             show command help
```

Execute the command `npx modern upgrade` in the project, by default, dependencies in the `package.json` are updated to the latest version.

:::info
the command is available in `@modern-js/app-tools` version >= 1.17.0, previous versions can be upgraded with `npx @modern-js/upgrade`.
:::