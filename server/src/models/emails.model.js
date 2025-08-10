import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  subject: String,
  sender: String,
  body: String,
  category: String, // "Important", "Spam", etc.
});

export default mongoose.model("Email", EmailSchema);
