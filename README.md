# bmi-calculator

This is simple Rest API for calculating BMI

API:

`POST /bmi/calculate`
input:
``` 
[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    }
]    
```
output:
```
{
    "overWeightCount": 0,
    "persons": [
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96,
            "BMI": 32.83061454806607,
            "BMICategory": "Moderately obese",
            "HealthRisk": "Medium risk"
        }
    ] 
}
```
Steps to run:
1. Run `npm install`
2. Run `npm start` to run the API.
3. Run `npm test` to run tests. 
