export interface IPerson {
    Gender: string;
    HeightCm: number;
    WeightKg: number;
    BMI?: number;
    BMICategory?: BMICategory;
    HealthRisk?: HealthRisk;
}

export enum BMICategory {
    Underweight = "Underweight",
    Normalweight = "Normal weight",
    OverWeight = "Overweight",
    ModeratelyObese = "Moderately obese",
    SeverelObese = "Severel obese",
    VerySeverelyObese = "Very severely obese"
}

export enum HealthRisk {
    MalnutritionRisk = "Malnutrition risk",
    LowRisk = "Low risk",
    EnhancedRisk = "Enhanced risk",
    MediumRisk = "Medium risk",
    HighRisk = "High risk",
    VeryHighRisk = "Very high risk"
}