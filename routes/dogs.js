import express from "express";
import { getDogs, createDog, updateDog, deleteDog } from "../controllers/dogsController.js";
import validate from "../middleware/validate.js";
import dogSchema from "../schemas/dogSchema.js";

const router = express.Router();

router.get("/", getDogs);
router.post("/", validate(dogSchema), createDog);
router.put("/:id", validate(dogSchema), updateDog);
router.delete("/:id", deleteDog);

export default router;
