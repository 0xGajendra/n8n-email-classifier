import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emails.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
});

app.use("/api/emails", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
