import request from "supertest";
import app from "../src/app";


describe("POST /bmi/calculate", () => {
    it("should return false from assert when no message is found", (done) => {
        const payload = [
            {
                "Gender": "Male",
                "HeightCm": 171,
                "WeightKg": 96
            },
            {
                "Gender": "Male",
                "HeightCm": 161,
                "WeightKg": 85
            },
            {
                "Gender": "Male",
                "HeightCm": 180,
                "WeightKg": 77
            },
            {
                "Gender": "Female",
                "HeightCm": 166,
                "WeightKg": 62
            },
            {
                "Gender": "Female",
                "HeightCm": 150,
                "WeightKg": 70
            },
            {
                "Gender": "Female",
                "HeightCm": 167,
                "WeightKg": 82
            }
        ];

        const response = {
            "overWeightCount": 2,
            "persons": [
                {
                    "Gender": "Male",
                    "HeightCm": 171,
                    "WeightKg": 96,
                    "BMI": 32.83061454806607,
                    "BMICategory": "Normal weight",
                    "HealthRisk": "Low risk"
                },
                {
                    "Gender": "Male",
                    "HeightCm": 161,
                    "WeightKg": 85,
                    "BMI": 32.79194475521777,
                    "BMICategory": "Normal weight",
                    "HealthRisk": "Low risk"
                },
                {
                    "Gender": "Male",
                    "HeightCm": 180,
                    "WeightKg": 77,
                    "BMI": 23.76543209876543,
                    "BMICategory": "Very severely obese",
                    "HealthRisk": "Very high risk"
                },
                {
                    "Gender": "Female",
                    "HeightCm": 166,
                    "WeightKg": 62,
                    "BMI": 22.49963710262738,
                    "BMICategory": "Very severely obese",
                    "HealthRisk": "Very high risk"
                },
                {
                    "Gender": "Female",
                    "HeightCm": 150,
                    "WeightKg": 70,
                    "BMI": 31.11111111111111,
                    "BMICategory": "Normal weight",
                    "HealthRisk": "Low risk"
                },
                {
                    "Gender": "Female",
                    "HeightCm": 167,
                    "WeightKg": 82,
                    "BMI": 29.402273297715947,
                    "BMICategory": "Normal weight",
                    "HealthRisk": "Low risk"
                }
            ]
        };
        request(app).post("/bmi/calculate")
            .send({ payload })
            .end((_, res) => {
                expect(res.body).toEqual(response);
                expect(res.error).toBeFalsy();
                done();
            })
            .expect(200);
    });
});