import { text, pgTable, serial, integer } from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  name: text("name").notNull(),
});

export const characters = pgTable("characters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  xp: integer("expérience").notNull(),
  classId: integer("classId").notNull(),
  playerId: integer("playerId").notNull(),
});

export const classes = pgTable("classes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  power: integer("power").notNull(),
  hp: integer("Point de vie").notNull(),
});

