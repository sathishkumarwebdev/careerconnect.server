import express from "express";
import {
  getUser,
  loginUser,
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

router.post("/login", loginUser);

// U-Update
router.put("/:id", userUpdate);

// D- delete
router.delete("/:id", userDelete);

export default router;
