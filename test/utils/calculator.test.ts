import { BMICategory, HealthRisk, IPerson } from "../../src/types";
import { updateBMI } from "../../src/utils/calculator";


describe("updateBMI", () => {
    it("should not update BMI, BMI Category and HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": null, "WeightKg": null
        };
        updateBMI(person);
        expect(person.BMI).not.toBeDefined();
        expect(person.BMICategory).not.toBeDefined();
        expect(person.HealthRisk).not.toBeDefined();
    });

    it("should update BMI, 'Normal weight' as BMI Category and 'Low risk' as HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": 171, "WeightKg": 68
        };
        updateBMI(person);
        expect(person.BMI).toEqual(23.25501863821347);
        expect(person.BMICategory).toEqual(BMICategory.Normalweight);
        expect(person.HealthRisk).toEqual(HealthRisk.LowRisk);
    });

    it("should update BMI, 'Underweight' as BMI Category and 'Malnutrition risk' as HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": 250, "WeightKg": 96
        };
        updateBMI(person);
        expect(person.BMI).toEqual(15.36);
        expect(person.BMICategory).toEqual("Underweight");
        expect(person.HealthRisk).toEqual("Malnutrition risk");
    });

    it("should update BMI, 'Very severely obese' as BMI Category and 'Very high risk' as HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": 50, "WeightKg": 96
        };
        updateBMI(person);
        expect(person.BMI).toEqual(384);
        expect(person.BMICategory).toEqual("Very severely obese");
        expect(person.HealthRisk).toEqual("Very high risk");
    });

    it("should update BMI, 'OverWeight' as BMI Category and 'EnhancedRisk' as HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": 168, "WeightKg": 81
        };
        updateBMI(person);
        expect(person.BMI).toEqual(28.69897959183674);
        expect(person.BMICategory).toEqual(BMICategory.OverWeight);
        expect(person.HealthRisk).toEqual(HealthRisk.EnhancedRisk);
    });

    it("should update BMI, 'ModeratelyObese' as BMI Category and 'MediumRisk' as HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": 160, "WeightKg": 81
        };
        updateBMI(person);
        expect(person.BMI).toEqual(31.640624999999993);
        expect(person.BMICategory).toEqual(BMICategory.ModeratelyObese);
        expect(person.HealthRisk).toEqual(HealthRisk.MediumRisk);
    });

    it("should update BMI, 'SeverelObese' as BMI Category and 'HighRisk' as HealthRisk", () => {
        const person: IPerson = {
            "Gender": "Male", "HeightCm": 145, "WeightKg": 81
        };
        updateBMI(person);
        expect(person.BMI).toEqual(38.525564803805);
        expect(person.BMICategory).toEqual(BMICategory.SeverelObese);
        expect(person.HealthRisk).toEqual(HealthRisk.HighRisk);
    });
});
