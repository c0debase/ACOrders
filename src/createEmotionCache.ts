import createCache from '@emotion/cache';

// Create emotion cache

export default function createEmotionCache() {
  return createCache({ key: 'css' });
}
