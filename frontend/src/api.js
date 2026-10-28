const API = "/api";

async function get(endpoint) {
  const res = await fetch(`${API}${endpoint}`);
  if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
  return res.json();
}

export const getProfile = () => get("/profile");
export const getAbout = () => get("/about");
export const getEducation = () => get("/education");
export const getExperience = () => get("/experience");
export const getAchievements = () => get("/achievements");
export const getProjects = () => get("/projects");

export async function sendContact(data) {
  const res = await fetch(`${API}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || "Failed to send message");
  return json;
}
