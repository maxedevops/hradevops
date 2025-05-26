function calculateRisk({ age, weight, height, smoker, activityLevel }) {
  const bmi = weight / ((height / 100) ** 2);
  let score = 0;

  // Age risk
  if (age > 60) score += 2;
  else if (age > 40) score += 1;

  // BMI risk
  if (bmi > 30) score += 2;
  else if (bmi > 25) score += 1;

  // Smoking risk
  if (smoker) score += 3;

  // Activity level risk
  if (activityLevel === "low") score += 2;
  else if (activityLevel === "medium") score += 1;

  let riskCategory = "Low";
  if (score >= 7) riskCategory = "High";
  else if (score >= 4) riskCategory = "Moderate";

  return { score, bmi: bmi.toFixed(2), riskCategory };
}

module.exports = calculateRisk;
