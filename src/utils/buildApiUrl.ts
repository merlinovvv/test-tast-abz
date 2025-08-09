import type { BuildApiUrlTypes } from '../types/functions.ts';

/**
 * Create URL with query-params
 * @param endpoint - base endpoint API
 * @param params - object with query-params
 * @returns full URL with params
 */
export function buildApiUrl(
  endpoint: BuildApiUrlTypes['endpoint'],
  params?: BuildApiUrlTypes['params'],
) {
  let queryParamsString = Object.keys(params || {})
    ?.map(key => `${key}=${params?.[key]}`)
    .join('&');

  return `${endpoint}/?${queryParamsString}`;
}
