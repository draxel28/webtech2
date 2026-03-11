const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const API_KEY = "YOUR_HF_KEY";

app.post("/chat", async (req, res) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/facebook/bart-large-cnn",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: req.body.message,
      }),
    },
  );

  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
