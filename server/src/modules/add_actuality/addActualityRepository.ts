import type { Result } from "../../../database/client";
import client from "../../../database/client";
import type { addactuality } from "./addActuality";

class addActualityRepository {
  async create(add_actuality: addactuality): Promise<number> {
    try {
      // Execute the SQL INSERT query to add a new item
      const [result] = await client.query<Result>(
        "INSERT INTO add_actuality (name_actuality, add_photo, actuality) VALUES (?, ?, ?)",
        [
          add_actuality.name_actuality,
          add_actuality.add_photo,
          add_actuality.actuality,
        ],
      );

      // Return the ID of the newly inserted item
      return result.insertId;
    } catch (error) {
      console.error("Erreur lors de l'insertion en base de données :", error);
      throw new Error("Impossible d'ajouter l'actualité.");
    }
  }
}

export default new addActualityRepository();
