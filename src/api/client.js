import Constants from "expo-constants";

const extraUrl = Constants.expoConfig?.extra?.apiUrl;
const devHost = Constants.expoConfig?.hostUri?.split(":")[0];

export const API_URL =
  (extraUrl && extraUrl.trim()) ||
  (devHost ? `http://${devHost}:3000` : "http://localhost:3000");

async function request(path, options) {
  const res = await fetch(`${API_URL}${path}`, options);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export const apiGet = (path) => request(path);
