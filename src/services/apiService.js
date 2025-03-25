import { API_ENDPOINTS } from "../config/api";

// Helper function to get auth token
const getAuthToken = () => localStorage.getItem("token");

// Helper function to get headers
const getHeaders = (includeAuth = true) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return headers;
};

// Auth Services
export const authService = {
  signup: async (userData) => {
    const response = await fetch(API_ENDPOINTS.SIGNUP, {
      method: "POST",
      headers: getHeaders(false),
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  login: async (credentials) => {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: "POST",
      headers: getHeaders(false),
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  getCurrentUser: async () => {
    const response = await fetch(API_ENDPOINTS.GET_CURRENT_USER, {
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },
};

// Investment Services
export const investmentService = {
  createInvestment: async (investmentData) => {
    const response = await fetch(API_ENDPOINTS.CREATE_INVESTMENT, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(investmentData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  getInvestments: async () => {
    const response = await fetch(API_ENDPOINTS.GET_INVESTMENTS, {
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  getInvestmentStats: async () => {
    const response = await fetch(API_ENDPOINTS.GET_INVESTMENT_STATS, {
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  updateInvestmentStatus: async (id, status, transactionHash) => {
    const response = await fetch(API_ENDPOINTS.UPDATE_INVESTMENT_STATUS(id), {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify({ status, transactionHash }),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },
};

// Profile Services
export const profileService = {
  getProfile: async () => {
    const response = await fetch(API_ENDPOINTS.GET_PROFILE, {
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  updateProfile: async (profileData) => {
    const response = await fetch(API_ENDPOINTS.UPDATE_PROFILE, {
      method: "PATCH",
      headers: getHeaders(),
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  getInvestmentHistory: async () => {
    const response = await fetch(API_ENDPOINTS.GET_INVESTMENT_HISTORY, {
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },

  getProfileSummary: async () => {
    const response = await fetch(API_ENDPOINTS.GET_PROFILE_SUMMARY, {
      headers: getHeaders(),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  },
};
