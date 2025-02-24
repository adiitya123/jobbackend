import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cloudinary from "cloudinary";

// Load environment variables from .env file
dotenv.config();

// Initialize Express App
const app = express();
app.use(express.json()); // Middleware to parse JSON data
app.use(cors()); // Enable CORS for frontend-backend communication

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Configure Cloudinary (Fixed issue with .v2)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "didzyox00",
  api_key: process.env.CLOUDINARY_API_KEY || "398772418677731",
  api_secret: process.env.CLOUDINARY_API_SECRET || "QjZTwTwrcW06rWrhmU21-7Erp8",
});

// ✅ Sample API Route (To Check if Backend is Running)
app.get("/", (req, res) => {
  res.send("🚀 API is working!");
});

// ✅ Start Server on Port 5000 or the one in .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
