import express from "express";
import {
  moviesCreate,
  moviesDelete,
  moviesRead,
  moviesUpdate,
  singleMovieRead,
} from "../controller/movies.controller.js";

const router = express.Router();

// Create
router.post("/", moviesCreate);

// R-Read
router.get("/", moviesRead);

router.get("/:id",singleMovieRead);

// U-Update
router.put("/:id", moviesUpdate);

// D- delete
router.delete("/:id", moviesDelete);

export default router;
