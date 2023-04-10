import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./confiq/db";
import dotenv from "dotenv";
dotenv.config();
import userRoues from "./routes/user";
import { connect } from "mongoose";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRoues);

// ENV
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello skill hive be");
});

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
