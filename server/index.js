import "./db/conn.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = process.env.PORT || 5000;
import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true })); // for images the size is fix
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`listening the port at  ${PORT}`);
});
