const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend IoT API running...");
});

app.get("/api/sensor", (req, res) => {
  res.json({
    temperature: 28,
    humidity: 76,
    waterLevel: 65,
    ph: 6.8,
    timestamp: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});