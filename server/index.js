import express from "express";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
const distPath = path.resolve(__dirname, "..", "dist");
const inquiriesPath = path.join(__dirname, "data", "inquiries.json");

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json({ limit: "1mb" }));

  async function ensureInquiryStore() {
    try {
      await fs.access(inquiriesPath);
    } catch {
      await fs.mkdir(path.dirname(inquiriesPath), { recursive: true });
      await fs.writeFile(inquiriesPath, "[]", "utf-8");
    }
  }

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true, service: "batik-srigaya-api" });
  });

  app.post("/api/inquiry", async (req, res) => {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Nama, email, dan pesan wajib diisi." });
    }

    await ensureInquiryStore();
    const current = JSON.parse(await fs.readFile(inquiriesPath, "utf-8"));
    const record = {
      id: randomUUID(),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };
    current.unshift(record);
    await fs.writeFile(inquiriesPath, JSON.stringify(current, null, 2), "utf-8");

    res.json({
      ok: true,
      message: "Pesan diterima. Kami akan menghubungi kamu kembali.",
    });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    app.get("*", async (req, res, next) => {
      if (req.path.startsWith("/api/")) return next();
      try {
        await fs.access(path.join(distPath, "index.html"));
        res.sendFile(path.join(distPath, "index.html"));
      } catch {
        next();
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Batik Srigaya API running on http://localhost:${PORT}`);
  });
}

startServer();
