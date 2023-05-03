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
import authRoutes from "./routes/auth";
import fileUpload from "express-fileupload";

// cloudinary
import cloudinary from "./utils/cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import multer from "multer";

const app = express();

// ENV
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT;
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_KEY = process.env.API_KEY;
const API_SECRET_KEY = process.env.API_SECRET_KEY;

// middlewares
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// cloudinary start

app.post("/upload", async (req: any, res: Response) => {
  // console.log("===>", req.files.image);
  const result = await cloudinary.v2.uploader.upload(
    req.files.image.tempFilePath,
    {
      folder: "Skill-Hive",
    }
  );
  console.log("===>", result);
  res.status(200).json({ message: "Амжилттай хадгаллаа.", imgUrl: "url" });
});

app.use("/uploads", express.static("uploads"));

// cloudinary end

// Routes
app.use("/users", userRoutes);
app.use("/freelancer", freelancerRoutes);
app.use("/services", serviceRoutes);
app.use("/categories", categoryRoutes);
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello skill hive be");
});

app.use(error);

connectDB(MONGO_URI);

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
