const API_BASE_URL = "https://bitcoin-app-backend.onrender.com";

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  GET_CURRENT_USER: `${API_BASE_URL}/api/auth/me`,

  // Investment endpoints
  CREATE_INVESTMENT: `${API_BASE_URL}/api/investments`,
  GET_INVESTMENTS: `${API_BASE_URL}/api/investments/my-investments`,
  GET_INVESTMENT_STATS: `${API_BASE_URL}/api/investments/stats`,
  UPDATE_INVESTMENT_STATUS: (id) =>
    `${API_BASE_URL}/api/investments/${id}/status`,

  // Profile endpoints
  GET_PROFILE: `${API_BASE_URL}/api/profile`,
  UPDATE_PROFILE: `${API_BASE_URL}/api/profile`,
  GET_INVESTMENT_HISTORY: `${API_BASE_URL}/api/profile/investments`,
  GET_PROFILE_SUMMARY: `${API_BASE_URL}/api/profile/summary`,
};

export default API_BASE_URL;
