const formatURL = (baseUrl: string | undefined) => {
  if (!baseUrl) return '';  
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};


export const API_BASE_URL = formatURL(import.meta.env.VITE_API_BASE_URL);