export const settingsService = {
  getSettings() {
    const settings = localStorage.getItem("userSettings");
    return settings
      ? JSON.parse(settings)
      : {
          notifications: {
            email: true,
            push: true,
            sms: false,
            security: true,
          },
          preferences: {
            language: "English",
            timezone: "UTC",
            currency: "USD",
          },
          security: {
            twoFactorEnabled: false,
          },
          profile: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          },
        };
  },

  updateSettings(newSettings) {
    const currentSettings = this.getSettings();
    const updatedSettings = {
      ...currentSettings,
      ...newSettings,
    };
    localStorage.setItem("userSettings", JSON.stringify(updatedSettings));
    return updatedSettings;
  },

  updateProfile(profileData) {
    return this.updateSettings({ profile: profileData });
  },

  updateSecurity(securityData) {
    return this.updateSettings({ security: securityData });
  },

  updateNotifications(notifications) {
    return this.updateSettings({ notifications });
  },

  updatePreferences(preferences) {
    return this.updateSettings({ preferences });
  },
};
