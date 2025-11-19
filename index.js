import express from "express";
import cors from "cors";
import connectDb from "./config/db.js";
import itemRoutes from "./routes/itemRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.FRONTED_URL }));

app.get("/", (req, res) => {
  res.send("jay shree ram");
});

app.use("/item", itemRoutes);
app.use("/user", userRoutes);

// Connect to database and start server
const startServer = async () => {
  await connectDb();
  const server = app.listen(port, () => {
    console.log(`🚀 Connect Robo Backend started on port: http://localhost:${port}`);
  });
  
  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`❌ Port ${port} is already in use. Please free the port or use a different port.`);
      process.exit(1);
    } else {
      console.error('❌ Server error:', error);
      process.exit(1);
    }
  });
};

startServer().catch((error) => {
  console.error('❌ Failed to start server:', error);
  process.exit(1);
});
