const normalizeBaseUrl = (value) => {
  if (!value) return '';
  return value.endsWith('/') ? value.slice(0, -1) : value;
};

const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL);

export const getApiUrl = (path) => {
  if (!path.startsWith('/')) {
    throw new Error('API path must start with "/".');
  }

  return `${API_BASE_URL}${path}`;
};
