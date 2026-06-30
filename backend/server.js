const express = require("express");
const cors = require("cors");
const {
  profile,
  about,
  education,
  experience,
  achievements,
  projects,
} = require("./data/portfolio");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/profile", (_req, res) => res.json(profile));
app.get("/api/about", (_req, res) => res.json(about));
app.get("/api/education", (_req, res) => res.json(education));
app.get("/api/experience", (_req, res) => res.json(experience));
app.get("/api/achievements", (_req, res) => res.json(achievements));
app.get("/api/projects", (_req, res) => res.json(projects));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All fields are required." });
  }
  console.log("Contact:", { name, email, message });
  res.json({ success: true, message: "Thanks for reaching out! I'll get back to you soon." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
