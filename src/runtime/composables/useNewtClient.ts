import { createClient } from 'newt-client-js';
import type {
  GetContentsParams,
  GetContentParams,
  GetFirstContentParams,
} from 'newt-client-js/dist/types';

import { useRuntimeConfig, useAsyncData } from 'nuxt/app';

const newtClient = () => {
  const config = useRuntimeConfig();
  return createClient({
    spaceUid: config.public.newt.spaceUid,
    token: config.public.newt.cdnApiToken
      ? config.public.newt.cdnApiToken
      : config.newt.cdnApiToken,
    apiType: config.public.newt.apiType,
    fetch: globalThis.fetch,
  });
};

export const useNewtGetContents = <T>(
  key: string,
  { appUid, modelUid, query }: GetContentsParams,
) => {
  return useAsyncData(key, async () => {
    return await newtClient().getContents<T>({
      appUid: appUid,
      modelUid: modelUid,
      query: query,
    });
  });
};

export const useNewtGetContent = <T>(
  key: string,
  { appUid, modelUid, contentId, query }: GetContentParams,
) => {
  return useAsyncData(key, async () => {
    return await newtClient().getContent<T>({
      appUid: appUid,
      modelUid: modelUid,
      contentId: contentId,
      query: query,
    });
  });
};

export const useNewtGetFirstContent = <T>(
  key: string,
  { appUid, modelUid, query }: GetFirstContentParams,
) => {
  return useAsyncData(key, async () => {
    return await newtClient().getFirstContent<T>({
      appUid: appUid,
      modelUid: modelUid,
      query: query,
    });
  });
};
