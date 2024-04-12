import "dotenv/config";
import express, { Request, Response } from "express";
import { db } from "./infrastructure/db";
import { players, characters } from "./infrastructure/db/schema";
import { playersRouter, charactersRouter } from "./routes";

const app = express();
const port = process.env.PORT || 3000;

// Adds the express JSON parser as a Middleware to parse each request.
app.use(express.json());
app.use("/players", playersRouter);
app.use("/characters", charactersRouter);

// Create route "/" and send plain text.
app.get("/", async (req: Request, res: Response) => {
  const result = await db
    .insert(players)
    .values({
      email: "valentin.montagne@gmail.com",
      name: "Valentin Montagne",
    })
    .returning();
  console.log("Result :", result);
  res.send("Hello, TypeScript Express!");
});

// Starts the server.
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


