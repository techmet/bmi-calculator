import { BMICategory, HealthRisk, IPerson } from "../types";

export const updateBMI = (person: IPerson) => {
    if (typeof person.WeightKg === "number" && typeof person.HeightCm === "number") {
        const bmi = person.WeightKg / Math.pow(person.HeightCm / 100, 2);

        let healthRisk: HealthRisk, bmiCategory: BMICategory;

        if (bmi <= 18.4) {
            healthRisk = HealthRisk.MalnutritionRisk;
            bmiCategory = BMICategory.Underweight;
        } else if (18.5 <= bmi && bmi <= 24.9) {
            healthRisk = HealthRisk.LowRisk;
            bmiCategory = BMICategory.Normalweight;
        } else if (25 <= bmi && bmi <= 29.9) {
            healthRisk = HealthRisk.EnhancedRisk;
            bmiCategory = BMICategory.OverWeight;
        } else if (30 <= bmi && bmi <= 34.9) {
            healthRisk = HealthRisk.MediumRisk;
            bmiCategory = BMICategory.ModeratelyObese;
        } else if (35 <= bmi && bmi <= 39.9) {
            healthRisk = HealthRisk.HighRisk;
            bmiCategory = BMICategory.SeverelObese;
        } else if (40 <= bmi) {
            healthRisk = HealthRisk.VeryHighRisk;
            bmiCategory = BMICategory.VerySeverelyObese;
        }

        person.BMI = bmi;
        person.BMICategory = bmiCategory;
        person.HealthRisk = healthRisk;
    }
}