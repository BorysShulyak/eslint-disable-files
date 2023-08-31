# eslint-disable-files

## Table of Contents

- [✨ Features](#-features)
- [🦾 Installation](#-installation)
- [♾️Usage](#-usage)
- [⚙️ API](#-api)
- [🛠️ Contributing](#-contributing)
- [🗺️ Roadmap](#-roadmap)
- [❤️Support or Donate](#-support-or-donate)
- [💕Special Thanks](#-special-thanks)

## ✨ Features

- Add `/* eslint-disable */` for all the files.

## 🦾 Installation

```bash
yarn add @borisshulyak/eslint-disable-files@latest
```

**OR**

```bash
npm install @borisshulyak/eslint-disable-files@latest
```

## ♾️ Usage

- Create a temporary file `tempEslintDisableFiles.js` in some folder.
- Paste the following code to the file:

```javascript
import { eslintDisableFiles } from '@borisshulyak/eslint-disable-files';

eslintDisableFiles()
```

- Run the file with Node.js from any folder.
- All the files by the following pattern `/\.[cm]?[jt]sx?$/` in the current folder would have the `/* eslint-disable */` as the first line.

## ⚙️ API

`eslintDisableFiles` - method with the following arguments:

| Argument | Type | Default |
| --- | --- | --- |
| `rootDir` | String | `‘./’` |
| `pattern` | RegExp | `/\.[cm]?[jt]sx?$/` |

## 🛠️ Contributing

See the [CONTRIBUTING.md](https://github.com/BorysShulyak/eslint-disable-files/blob/main/CONTRIBUTING.md)document.

## 🗺️ Roadmap

- Create the backward method `eslintEnableFile`

## ❤️ Support or Donate
If you are enjoying this plugin and feel extra appreciative, you could [buy me a book](https://bmc.link/borisshulyak)
📖 or 3 📖📖📖.

## 💕 Special Thanks

- I want to say thank you to**my wife Diana**for her love, daily support, motivation and inspiration.