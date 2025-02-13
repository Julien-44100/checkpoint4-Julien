import type { Request, RequestHandler, Response } from "express";
import type { FieldPacket, RowDataPacket } from "mysql2";
import client from "../../../database/client";
import ActualityRepository from "./ActualityRepository";

const edit: RequestHandler = async (req, res) => {
  try {
    const { name_actuality, add_photo, actuality } = req.body;
    const { id } = req.params;

    const actualityspace = await ActualityRepository.update(
      name_actuality,
      add_photo,
    );

    if (!name_actuality || !add_photo || !actuality) {
      res.status(400).json({ error: "Tous les champs sont requis." });
      return;
    }

    const insertedId = await ActualityRepository.create({
      name_actuality,
      add_photo,
      actuality,
    });

    if (actualityspace) {
      res.status(201).send({
        message: `L'actualité "${name_actuality}" a été ajoutée avec succès !`,
      });
    } else {
      res
        .status(404)
        .json({ error: "Une erreur est survenue lors de l'ajout." });
    }
  } catch (err) {
    console.error("Erreur lors de l'ajout de l'actualité :", err);
    res.status(500).json({ error: "Erreur serveur lors de l'ajout." });
  }
};

export default { edit };
