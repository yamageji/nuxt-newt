import type {
  Contents,
  GetContentsParams,
  GetContentParams,
  GetFirstContentParams,
} from 'newt-client-js/dist/types';

import { useRuntimeConfig, useAsyncData } from 'nuxt/app';
import { parseQuery } from '../utils/parseQuery';

const createConfig = () => {
  const config = useRuntimeConfig();

  const spaceUid = config.public.newt.spaceUid;
  const token = config.public.newt.cdnApiToken
    ? config.public.newt.cdnApiToken
    : config.newt.cdnApiToken;
  const apiType = config.public.newt.apiType;

  const baseUrl = new URL(`https://${spaceUid}.${apiType}.newt.so`);
  const headers = { Authorization: `Bearer ${token}` };

  return { baseUrl, headers };
};

export const useNewtGetContents = <T>(
  key: string,
  { appUid, modelUid, query }: GetContentsParams,
) => {
  if (!appUid) throw new Error('appUid parameter is required.');
  if (!modelUid) throw new Error('modelUid parameter is required.');

  const { baseUrl, headers } = createConfig();

  const url = new URL(`/v1/${appUid}/${modelUid}`, baseUrl.toString());

  if (query && Object.keys(query).length) {
    const { encoded } = parseQuery(query);
    url.search = encoded;
  }

  return useAsyncData<Contents<T>>(key,
    () => $fetch(url.toString(), { headers }),
  );
};

export const useNewtGetContent = <T>(
  key: string,
  { appUid, modelUid, contentId, query }: GetContentParams,
) => {
  if (!appUid) throw new Error('appUid parameter is required.');
  if (!modelUid) throw new Error('modelUid parameter is required.');
  if (!contentId) throw new Error('contentId parameter is required.');

  const { baseUrl, headers } = createConfig();

  const url = new URL(`/v1/${appUid}/${modelUid}/${contentId}`, baseUrl.toString());

  if (query && Object.keys(query).length) {
    const { encoded } = parseQuery(query);
    url.search = encoded;
  }

  return useAsyncData<T>(key,
    () => $fetch(url.toString(), { headers }),
  );
};

export const useNewtGetFirstContent = async <T>(
  key: string,
  { appUid, modelUid, query }: GetFirstContentParams,
) => {
  if (query && query.limit) {
    throw new Error('query.limit parameter cannot have a value.');
  }
  const q = { ...query, limit: 1 };

  const { data, ...rest } = await useNewtGetContents<T>(key, { appUid, modelUid, query: q });
  const item = data.value?.items[0];
  return { data: item, ...rest };
};
