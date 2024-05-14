export default defineNuxtConfig({
  modules: ['../src/module'],
  newt: {
    spaceUid: process.env.NEWT_SPACE_UID,
    cdnApiToken: process.env.NEWT_CDN_API_TOKEN,
    apiType: 'cdn', // 'cdn' or 'api'. default is 'cdn'.
    target: 'server', // 'server' or 'all'. default is 'server'.
  },
  devtools: { enabled: true },
});
