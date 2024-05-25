declare module 'nuxt/schema' {
  interface RuntimeConfig {
    newt: {
      cdnApiToken: string | undefined;
    };
  }
  interface PublicRuntimeConfig {
    newt: {
      spaceUid: string | undefined;
      cdnApiToken: string | undefined;
      apiType: 'cdn' | 'api';
    };
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {};
