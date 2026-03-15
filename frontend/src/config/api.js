const normalizeBaseUrl = (value) => {
  if (!value) return '';
  return value.endsWith('/') ? value.slice(0, -1) : value;
};

const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL);
const DEFAULT_TIMEOUT_MS = 10000;

const isLocalHost = () => {
  if (typeof window === 'undefined') return false;
  return ['localhost', '127.0.0.1'].includes(window.location.hostname);
};

export const getApiUrl = (path) => {
  if (!path.startsWith('/')) {
    throw new Error('API path must start with "/".');
  }

  return `${API_BASE_URL}${path}`;
};

export const apiRequest = async (path, options = {}) => {
  // On static production hosts (like GitHub Pages), fail fast when no backend is configured.
  if (!API_BASE_URL && !isLocalHost()) {
    throw new Error('No API base URL configured for production.');
  }

  const {
    method = 'GET',
    headers = {},
    body,
    timeoutMs = DEFAULT_TIMEOUT_MS,
  } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(getApiUrl(path), {
      method,
      headers,
      body,
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return await response.json();
    }

    return await response.text();
  } finally {
    clearTimeout(timeoutId);
  }
};
