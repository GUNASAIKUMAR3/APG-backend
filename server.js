const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth/auth");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const port = process.env.PORT || 5000;

const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB:", err));

app.listen(port, () => console.log(`Server running on port ${port}`));
