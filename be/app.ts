import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
dotenv.config();
import error from "./middlewares/error";

import userRoutes from "./routes/user";
import serviceRoutes from "./routes/service";
import freelancerRoutes from "./routes/freelancer";
import categoryRoutes from "./routes/category";
import { connect } from "mongoose";
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", userRoutes);
app.use("/freelancer", freelancerRoutes);
app.use("/services", serviceRoutes);
app.use("/categories", categoryRoutes);

// ENV
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello skill hive be");
});

app.use(error);

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
