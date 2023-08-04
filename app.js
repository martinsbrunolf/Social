import express from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//Mes middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next();
});
app.use(
  cors({
    origin: "http://localhost:3001",
  })
)
app.use(express.json());

app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/", authRoutes);
app.use("/api/", userRoutes);
app.use("/api/", postRoutes);
app.use("/api/", commentRoutes);
app.use("/api/", likeRoutes);
app.use("/api/", relationshipRoutes);

app.listen(3000, () => {
  console.log("Mon serveur est lu sur le port 3000!");
});