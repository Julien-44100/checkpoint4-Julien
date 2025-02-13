import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import client, { type Result } from "../../../database/client";
import type { addactuality } from "./addActuality";

class addActualityRepository {
  async create(add_actuality: addactuality) {
    // Execute the SQL INSERT query to add a new item to the "item" table
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
  }

  async getAll(): Promise<addactuality[]> {
    try {
      const [rows] = await client.query<RowDataPacket[]>(
        "SELECT * FROM add_actuality ORDER BY id DESC",
      );
      return rows as addactuality[];
    } catch (error) {
      console.error("Erreur lors de la récupération des actualités :", error);
      throw new Error("Impossible de récupérer les actualités.");
    }
  }
}

export default new addActualityRepository();
// "INSERT INTO add_actuality (name_actuality, add_photo, actuality) VALUES (?, ?, ?)",
