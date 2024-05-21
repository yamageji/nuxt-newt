declare module 'nuxt/schema' {
  interface RuntimeConfig {
    newt: {
      cdnApiToken: string;
    };
  }
  interface PublicRuntimeConfig {
    newt: {
      spaceUid: string;
      cdnApiToken: string | undefined;
      apiType: 'cdn' | 'api';
    };
  }
}
// It is always important to ensure you import/export something when augmenting a type
export {};
