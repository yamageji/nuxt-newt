import { defineNuxtModule, addImportsDir, createResolver } from '@nuxt/kit';
import { defu } from 'defu';

// Module options TypeScript interface definition
export interface ModuleOptions {
  spaceUid: string;
  cdnApiToken: string;
  apiType?: 'cdn' | 'api';
  target?: 'all' | 'server';
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-newt',
    configKey: 'newt',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  setup(options, nuxt) {
    if (!options.spaceUid) {
      throw new Error('spaceUid is required');
    }
    if (!options.cdnApiToken) {
      throw new Error('cdnApiToken is required');
    }
    if (!options.apiType) {
      options.apiType = 'cdn';
    }
    if (!options.target) {
      options.target = 'server';
    }

    nuxt.options.runtimeConfig.public.newt = defu(
      nuxt.options.runtimeConfig.public.newt, {
        spaceUid: options.spaceUid,
        cdnApiToken: options.cdnApiToken,
        apiType: options.apiType,
      });

    nuxt.options.runtimeConfig.newt = defu(
      nuxt.options.runtimeConfig.newt, {
        cdnApiToken: options.cdnApiToken,
      });

    if (!nuxt.options.dev && options.target !== 'all') {
      nuxt.options.runtimeConfig.public.newt.cdnApiToken = '';
    }

    const { resolve } = createResolver(import.meta.url);
    addImportsDir(resolve('./runtime/composables'));
  },
});
