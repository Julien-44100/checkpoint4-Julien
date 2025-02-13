import type { RequestHandler } from "express";
import "./addActualityRepository";
import addActualityRepository from "./addActualityRepository";
import { Request, Response } from "express";
import client from "../../../database/client";

// const edit: RequestHandler = async (req, res) => {
//     try {
//       const addActuality = await videoGamesRepository.create(req.body);
//       if (addActuality) {
//         res
//           .status(201)
//           .send(`Video game named ${req.body.name} has been created successfully`);
//       } else {
//         res.status(404).send("An error occurred");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

const add: RequestHandler = async (req, res): Promise<void> => {
  try {
    // Vérification que tous les champs sont bien remplis
    const { name_actuality, add_photo, actuality } = req.body;

    if (!name_actuality || !add_photo || !actuality) {
      res.status(400).json({ error: "Tous les champs sont requis." });
      return; // ✅ Ajout d'un `return` pour que la fonction s'arrête ici
    }

    // Insertion de l'actualité dans la base de données
    const insertedId = await addActualityRepository.create({
      name_actuality,
      add_photo,
      actuality,
    });

    if (insertedId) {
      res.status(201).json({
        message: `L'actualité "${name_actuality}" avec la photo "${add_photo}" et le contenu "${actuality}" a été ajoutée avec succès !`,
        id: insertedId,
      });
    } else {
      res
        .status(500)
        .json({ error: "Une erreur est survenue lors de l'ajout." });
    }
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'actualité :", err);
    res.status(500).json({ error: "Erreur serveur lors de l'ajout." });
  }
};
export const get = async (req: Request, res: Response) => {
  try {
    const [rows] = await client.query(
      "SELECT * FROM add_actuality ORDER BY id DESC",
    );
    res.status(200).json(rows);
  } catch (err) {
    console.error("Erreur lors de la récupération des actualités :", err);
    res.status(500).json({
      error: "Erreur serveur lors de la récupération des actualités.",
    });
  }
};

export default { add, get };
