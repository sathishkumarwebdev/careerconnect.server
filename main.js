import express from "express";
import userRoute from "./route/user.js";
import connectDB from "./lib/db.js";
import cors from "cors";

const app = express();
const PORT = 8082;

// middleware

app.use(express.json());
app.use(cors({origin:" http://localhost:3000"}));


// connect db

connectDB();

// crud op

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
