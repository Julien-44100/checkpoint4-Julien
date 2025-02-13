import type { RequestHandler } from "express";
import "./addActualityRepository";
import addActualityRepository from "./addActualityRepository";

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

const add: RequestHandler = async (req, res) => {
  try {
    const addActuality = await addActualityRepository.create(req.body);

    if (addActuality) {
      res
        .status(201)
        .send(
          `the actulity${req.body.name_actuality.add_photo.actuality} hass make sucessfuly`,
        );
    } else {
      res.status(404).send("An error");
    }

    // const insertId = await itemRepository.create(newItem);
  } catch (err) {
    console.error(err);
  }
};

export default { add };
