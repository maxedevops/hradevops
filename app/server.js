const express = require("express");
const bodyParser = require("body-parser");
const calculateRisk = require("./riskCalculator");

const app = express();
const PORT = process.env.PORT || 80;

app.use(bodyParser.json());

app.post("/assess", (req, res) => {
  const { age, weight, height, smoker, activityLevel } = req.body;

  if (!age || !weight || !height || typeof smoker !== "boolean" || !activityLevel) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  const riskScore = calculateRisk({ age, weight, height, smoker, activityLevel });
  res.json({ riskScore });
});

app.get("/", (req, res) => {
  res.send("Health Risk Assessment API is running.");
});

app.listen(PORT, () => {
  console.log(`HRA server running on port ${PORT}`);
});
