import fs from "node:fs";
import path from "node:path";
import Database from "better-sqlite3";
import { config } from "../config.js";

fs.mkdirSync(path.dirname(config.databaseFile), { recursive: true });

export const db = new Database(config.databaseFile);

db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT    NOT NULL,
    email         TEXT    NOT NULL UNIQUE,
    phone         TEXT,
    password_hash TEXT    NOT NULL,
    role          TEXT    NOT NULL DEFAULT 'patient',
    created_at    TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS doctors (
    id               INTEGER PRIMARY KEY AUTOINCREMENT,
    name             TEXT    NOT NULL,
    specialization   TEXT    NOT NULL,
    qualification    TEXT,
    experience       INTEGER NOT NULL DEFAULT 0,
    rating           REAL    NOT NULL DEFAULT 0,
    phone            TEXT,
    email            TEXT,
    consultation_fee INTEGER NOT NULL DEFAULT 0,
    bio              TEXT,
    image            TEXT,
    location         TEXT,
    languages        TEXT,
    status           TEXT    NOT NULL DEFAULT 'Available'
  );

  CREATE TABLE IF NOT EXISTS slots (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_id  INTEGER NOT NULL REFERENCES doctors(id) ON DELETE CASCADE,
    date       TEXT    NOT NULL,
    start_time TEXT    NOT NULL,
    end_time   TEXT    NOT NULL,
    status     TEXT    NOT NULL DEFAULT 'available',
    UNIQUE (doctor_id, date, start_time)
  );

  CREATE TABLE IF NOT EXISTS appointments (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    patient_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    doctor_id    INTEGER NOT NULL REFERENCES doctors(id) ON DELETE CASCADE,
    slot_id      INTEGER REFERENCES slots(id) ON DELETE SET NULL,
    date         TEXT    NOT NULL,
    time         TEXT    NOT NULL,
    reason       TEXT,
    status       TEXT    NOT NULL DEFAULT 'booked',
    cancelled_at TEXT,
    created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
    updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_slots_doctor_date ON slots (doctor_id, date);
  CREATE INDEX IF NOT EXISTS idx_appointments_patient ON appointments (patient_id, date);
  CREATE INDEX IF NOT EXISTS idx_doctors_specialization ON doctors (specialization);
`);
