import express from "express";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import {
  createUser,
  forgetPassword,
  currentUser,
  sendOtp,
  signIn,
  verifyOtp,
  updateUser,
} from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUser);
userRoutes.post("/login", signIn);
userRoutes.get("/currentUser", authenticateUser, currentUser);
userRoutes.put("/update", authenticateUser, updateUser)
userRoutes.post("/send-otp", sendOtp);
userRoutes.post("/verify-otp", verifyOtp);
userRoutes.post("/forget-password", forgetPassword);

export default userRoutes;
