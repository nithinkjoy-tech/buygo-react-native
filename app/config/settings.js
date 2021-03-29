import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "http://buygoapi.herokuapp.com",
  },
  staging: {
    apiUrl: "http://buygoapi.herokuapp.com",
  },
  prod: {
    apiUrl: "http://buygoapi.herokuapp.com",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
