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
[{
      "Gender": "Male",
      "HeightCm": 171,
      "WeightKg": 96,
      "BMI": 32.83061454806607,
      "BMICategory": "Normal weight",
      "HealthRisk": "Low risk"
 }]
```
Steps to run:
1. Run `npm install`
2. Run `npm start` to run the API.
3. Run `npm test` to run tests. 
