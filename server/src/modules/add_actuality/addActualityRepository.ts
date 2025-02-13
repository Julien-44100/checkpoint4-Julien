import type { Result } from "../../../database/client";
import client from "../../../database/client";
import type { addactuality } from "./addActuality";

class addActualityRepository {
  async create(add_actuality: addactuality) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await client.query<Result>(
      "INSERT INTO add_actuality (name_actuality, add_photo, actuality) VALUES (?, ?? ?)",
      [
        add_actuality.name_actuality,
        add_actuality.add_photo,
        add_actuality.actuality,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId as unknown as addactuality;
  }
}

export default new addActualityRepository();
