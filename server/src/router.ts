import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import addActualityActions from "./modules/add_actuality/addActualityActions";
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.get("/api/actualities", addActualityActions.get);
// router.put("/api/Add-actuality/:id", addActualityActions.edit);
/* ************************************************************************* */
router.post("/api/Add-actuality", addActualityActions.add);
export default router;
