import express from "express";
import {
  jobCreate,
  jobRead,
  jobUpdate,
  jobDelete,
  singleJobRead,
} from "../controller/job.controllers.js";

const router = express.Router();

// Create
router.post("/", jobCreate);

// R-Read
router.get("/", jobRead);

router.get("/:id", singleJobRead);

// U-Update
router.put("/:id", jobUpdate);

// D- delete
router.delete("/:id", jobDelete);

export default router;
