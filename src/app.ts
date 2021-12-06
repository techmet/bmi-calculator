import express from 'express';
import * as bmiController from "./controllers/bmi";

const app = express();
const port = 3000;


app.use(express.json());

app.post('/bmi/calculate', bmiController.calculateBMI);


app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});

export default app;