import express from "express";
import cors from "cors"
import connectDb from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = 1111;
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'https://my-shopee-beryl.vercel.app/'
}));


app.get("/", (req, res) => {
  res.send("jay shree ram");
});

app.use("/item", itemRoutes);
app.use("/user", userRoutes)

app.listen(port, () => {
  console.log(`app start on port: http://localhost:${process.env.PORT}`);
});
