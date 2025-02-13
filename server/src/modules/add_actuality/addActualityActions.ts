import type { Request, RequestHandler, Response } from "express";
import client from "../../../database/client";
import addActualityRepository from "./addActualityRepository";

const add: RequestHandler = async (req, res): Promise<void> => {
  try {
    const { name_actuality, add_photo, actuality } = req.body;

    if (!name_actuality || !add_photo || !actuality) {
      res.status(400).json({ error: "Tous les champs sont requis." });
      return;
    }

    const insertedId = await addActualityRepository.create({
      name_actuality,
      add_photo,
      actuality,
    });

    if (insertedId) {
      res.status(201).json({
        message: `L'actualité "${name_actuality}" a été ajoutée avec succès !`,
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

// ✅ Route pour récupérer toutes les actualités
const get: RequestHandler = async (req, res): Promise<void> => {
  try {
    // Correction du typage pour éviter l'erreur TypeScript
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [rows]: any[] = await client.query(
      "SELECT * FROM add_actuality ORDER BY id DESC",
    );

    if (Array.isArray(rows)) {
      res.status(200).json(rows);
    } else {
      res
        .status(500)
        .json({ error: "Données invalides reçues de la base de données." });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération des actualités :", err);
    res.status(500).json({
      error: "Erreur serveur lors de la récupération des actualités.",
    });
  }
};

export default { add, get };
