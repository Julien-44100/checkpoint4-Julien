import client from "../../../database/client";

import type { ResultSetHeader } from "mysql2";

import type { actuality } from "./ActualyType";

class ActualityRepository {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  create: any;

  async update(actuality: actuality, add_photo: actuality): Promise<number> {
    const [result] = await client.query<ResultSetHeader>(
      `
        UPDATE actuality
        SET name_actuality = ?, add_photo = ?, actuality = ?
        WHERE id = ?
      `,
      [actuality.name_actuality, actuality.add_photo, actuality.actuality],
    );

    return result.affectedRows;
  }
}

export default new ActualityRepository();
