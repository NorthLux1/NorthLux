import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", (req, res) => {
    console.log("Contact Form Submission:", req.body);
    // In a real app, send email or save to DB
    res.json({ success: true, message: "Thank you for your inquiry. Our modernization specialist will contact you within 24 hours." });
  });

  app.post("/api/audit", (req, res) => {
    console.log("Visual Audit Submission:", req.body);
    res.json({ success: true, message: "Photo received. We are preparing your Modern Mockup." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    app.use(express.static(path.resolve("dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
