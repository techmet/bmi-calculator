import { Request, Response } from "express";
import { BMICategory, HealthRisk, IPerson } from "../types"
import { updateBMI } from "../utils/calculator";

/**
 * Calculate BMI .
 * @route POST /bmi/calculate
 */
export const calculateBMI = async (req: Request, res: Response) => {
    const persons: IPerson[] = req.body;
    let i = 0, overWeightCnt = 0;
    while (i < persons.length) {
        updateBMI(persons[i]);

        if (persons[i].BMICategory === BMICategory.Normalweight ||
            persons[i].BMICategory === BMICategory.Underweight) {
            overWeightCnt++;
        }
        i++;
    }
    res.send({
        overWeightCount: persons.length - overWeightCnt,
        persons
    });
};
