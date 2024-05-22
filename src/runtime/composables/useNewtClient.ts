import type {
  Contents,
  GetContentsParams,
  GetContentParams,
  GetFirstContentParams,
} from 'newt-client-js/dist/types';

import { useRuntimeConfig, useAsyncData } from 'nuxt/app';
import type { AsyncData, NuxtError } from 'nuxt/app';

const createConfig = () => {
  const config = useRuntimeConfig();

  const spaceUid = config.public.newt.spaceUid;
  const token = config.public.newt.cdnApiToken ?? config.newt.cdnApiToken;
  const apiType = config.public.newt.apiType;

  const baseUrl = new URL(`https://${spaceUid}.${apiType}.newt.so`);
  const headers = { Authorization: `Bearer ${token}` };

  return { baseUrl, headers };
};

export const useNewtGetContents = <T>(
  key: string,
  { appUid, modelUid, query }: GetContentsParams,
): AsyncData<Contents<T> | null, NuxtError<unknown> | null> => {
  if (!appUid) throw new Error('appUid parameter is required.');
  if (!modelUid) throw new Error('modelUid parameter is required.');

  const { baseUrl, headers } = createConfig();

  const url = new URL(`/v1/${appUid}/${modelUid}`, baseUrl.toString());

  return useAsyncData<Contents<T>>(key,
    () => $fetch(url.toString(), { headers, query }),
  );
};

export const useNewtGetContent = <T>(
  key: string,
  { appUid, modelUid, contentId, query }: GetContentParams,
): AsyncData<T | null, NuxtError<unknown> | null> => {
  if (!appUid) throw new Error('appUid parameter is required.');
  if (!modelUid) throw new Error('modelUid parameter is required.');
  if (!contentId) throw new Error('contentId parameter is required.');

  const { baseUrl, headers } = createConfig();

  const url = new URL(`/v1/${appUid}/${modelUid}/${contentId}`, baseUrl.toString());

  return useAsyncData<T>(key,
    () => $fetch(url.toString(), { headers, query }),
  );
};

export const useNewtGetFirstContent = async <T>(
  key: string,
  { appUid, modelUid, query }: GetFirstContentParams,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  if (query && query.limit) {
    throw new Error('query.limit parameter cannot have a value.');
  }
  const q = { ...query, limit: 1 };

  const { data, ...rest } = await useNewtGetContents<T>(key, { appUid, modelUid, query: q });
  const item = data.value?.items[0];
  return { data: item, ...rest };
};
