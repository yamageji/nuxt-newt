# nuxt-newt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

[Newt](https://www.newt.so/) integration for [Nuxt](https://nuxt.com/).

## Quick Setup

1. Install the module to your Nuxt application with one command

```bash
npx nuxi module add nuxt-newt
```

2. Add `spaceUid` and `cdnApiToken` to the `newt` section of `nuxt.config.ts`

```ts
export default defineNuxtConfig({
  modules: ["nuxt-newt"],
  newt: {
    spaceUid: process.env.NEWT_SPACE_UID,
    cdnApiToken: process.env.NEWT_CDN_API_TOKEN,
  },
})
```

3. Add your Newt `spaceUid` and `cdnApiToken` to the `.env` file

```.env
NEWT_SPACE_UID='YOUR_SPACE_UID'
NEWT_CDN_API_TOKEN='YOUR_CDN_API_TOKEN'
```

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-newt/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-newt
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-newt.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-newt
[license-src]: https://img.shields.io/npm/l/nuxt-newt.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-newt
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
