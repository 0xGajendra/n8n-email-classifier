import express from "express";
import Email from "../models/emails.model.js";

const router = express.Router();

// Get all emails
router.get("/", async (req, res) => {
  const emails = await Email.find().sort({ time: -1 });
  res.json(emails);
});

// Filter by category
router.get("/category/:type", async (req, res) => {
  const emails = await Email.find({ category: req.params.type });
  res.json(emails);
});

export default router;
