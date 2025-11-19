import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDb = async () => {
    try {
        if (!process.env.DATA_BASE_URL) {
            console.log("⚠️  WARNING: DATA_BASE_URL not found in .env file");
            console.log("⚠️  Server will start but database features won't work");
            return;
        }
        await mongoose.connect(process.env.DATA_BASE_URL);
        console.log("✅ Connected to database successfully.");
    } catch (error) {
        console.log("❌ Database connection error:", error.message);
        console.log("⚠️  Server will continue but database features won't work");
        // Don't exit - allow server to run without DB for testing
    }
}

export default connectDb