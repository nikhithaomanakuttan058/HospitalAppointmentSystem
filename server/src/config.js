import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const serverRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

/**
 * Minimal .env loader so the server runs without extra dependencies.
 * Existing process.env values always win over the file.
 */
function loadEnvFile(file) {
  if (!fs.existsSync(file)) return;

  for (const rawLine of fs.readFileSync(file, "utf8").split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separator = line.indexOf("=");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile(path.join(serverRoot, ".env"));

const env = process.env;

export const config = {
  port: Number(env.PORT) || 5000,
  jwtSecret: env.JWT_SECRET || "medicare-hub-development-secret",
  jwtExpiresIn: env.JWT_EXPIRES_IN || "7d",
  databaseFile: env.DATABASE_FILE
    ? path.resolve(serverRoot, env.DATABASE_FILE)
    : path.resolve(serverRoot, "data", "hospital.db"),
  serverRoot,
};

/**
 * Number of days ahead that bookable slots are generated for.
 */
export const SLOT_HORIZON_DAYS = 14;
