import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import cors from "cors";                     // ← Add this

// Import Routes
import authRoutes from "./routes/authRoutes.js";
import propertyOwnerRoutes from "./routes/propertyOwnerRoutes.js";


import propertyRoutes from "./routes/propertyRoutes.js";

dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS Configuration
app.use(cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/property-owners', propertyOwnerRoutes);

app.use('/api/properties', propertyRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("❌ MongoDB Connection Failed:", err.message);
    });