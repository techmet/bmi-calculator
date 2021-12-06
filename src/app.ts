import express from 'express';
import * as bmiController from "./controllers/bmi";

const app = express();


app.use(express.json());

app.post('/bmi/calculate', bmiController.calculateBMI);


export default app;