import express from "express";
// import movieRoute from "./route/movies.js";
// import connectDB from "./lib/db.js";

const app = express();
const PORT = 8000;

// middleware

app.use(express.json());

// connect db

connectDB();

// crud op

// app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
