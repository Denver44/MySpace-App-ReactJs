import express from "express";
import bodyParser from "body-parser"; // This is for the images and for post request
import cors from "cors"; // for origin
import mongoose from "mongoose";
const PORT = process.env.PORT || 5000;
import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true })); // for images the size is fix
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Denver:denver_123@cluster0.k04xt.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server Running at ${PORT}`);
    })
  )
  .catch((e) => {
    console.log(e);
  });

app.use("/posts", postRoutes);

mongoose.set("useFindAndModify", false);
