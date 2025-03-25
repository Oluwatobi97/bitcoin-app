import { jwtDecode } from "jwt-decode";

const API_URL = "https://api.bitcoinapp.com"; // Replace with your actual API URL

export const authService = {
  async login(email, password) {
    try {
      // Get all registered users from localStorage
      const registeredUsers = JSON.parse(
        localStorage.getItem("registeredUsers") || "[]"
      );

      // Find the user with matching email and password
      const user = registeredUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Create a token with expiration
        const token = btoa(
          JSON.stringify({
            userId: user.id,
            email: user.email,
            exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours expiration
          })
        );

        // Store current session
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true");

        return {
          token,
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
            balance: user.balance || 0,
            bitcoin: user.bitcoin || 0,
          },
        };
      } else {
        throw new Error("Invalid email or password. Please try again.");
      }
    } catch (error) {
      throw error;
    }
  },

  async signup(userData) {
    try {
      // Get existing users
      const registeredUsers = JSON.parse(
        localStorage.getItem("registeredUsers") || "[]"
      );

      // Check if email already exists
      if (registeredUsers.some((user) => user.email === userData.email)) {
        throw new Error("Email already exists. Please use a different email.");
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        balance: 0,
        bitcoin: 0,
      };

      // Add new user to registered users
      registeredUsers.push(newUser);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

      // Create token and set current session
      const token = btoa(
        JSON.stringify({
          userId: newUser.id,
          email: newUser.email,
          exp: Date.now() + 24 * 60 * 60 * 1000, // 24 hours expiration
        })
      );

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("isLoggedIn", "true");

      return {
        token,
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          balance: newUser.balance,
          bitcoin: newUser.bitcoin,
        },
      };
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  },

  getCurrentUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated() {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
      const decoded = JSON.parse(atob(token));
      return decoded.exp > Date.now();
    } catch (error) {
      return false;
    }
  },
};
