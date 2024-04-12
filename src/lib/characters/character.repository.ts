import { db } from "../../infrastructure/db";
import { characters, players } from "../../infrastructure/db/schema";
import { CreateCharacter } from "./character.model";
 
export function createCharacterInRepository(data: CreateCharacter) {
  return db.insert(characters).values(data).returning();
}