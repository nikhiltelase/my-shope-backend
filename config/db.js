import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDb = () => {
    try {
        mongoose.connect(process.env.DATA_BASE_URL)
        console.log("connected to database successfully.")
    } catch (error) {
        console.log("database error", error)
        process.exit(1);
    }
}

export default connectDb