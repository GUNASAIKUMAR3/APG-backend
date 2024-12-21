const express = require("express");
const app = express();

app.post("/start", (req, res) => {});
app.get("/stop", (req, res) => {});
app.put("/manual-count", (req, res) => {});
app.get("/stream/:id", (req, res) => {});
