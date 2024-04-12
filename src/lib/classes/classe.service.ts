import { CreateClasseSchema, Player } from "./classe.model";
import { createClasseInRepository } from "./classe.repository";

export async function createClasse(data: unknown): Promise<Player> {
  const classeData = CreateClasseSchema.parse(data);
  const result = await createClasseInRepository(classeData);

  return result[0];
}
