import express from "express";
import {
  getUser,
  singleuser,
  userCreate,
  userDelete,
  userUpdate,
} from "../controller/user.controller.js";

const router = express.Router();

// Create
router.post("/", userCreate);

// R-Read
router.get("/", getUser);

router.get("/:username/:password", singleuser);

// U-Update
router.put("/:id", userUpdate);

// D- delete
router.delete("/:id", userDelete);

export default router;
