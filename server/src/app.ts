// Library imports.
import express, { Express, Request, Response } from "express";

import cors from 'cors';
import { createAuthToken, verifyAuthToken } from "./auth";

import { calculateFromOperators,evaluateExpression } from "./calculator"


const app: Express = express();

const options: cors.CorsOptions = {
    origin: "*"
};

app.use(cors(options));

app.use(express.json());

app.get('/api', (req: Request, res: Response)=>{
    res.end("welcome to calculator api");
});


//request handler for by operators calculations
const calculationRequestHandler = (operator: string) => {
    return (req: Request, res: Response) => {
        const query = req.query as any;

        if (query.op1 === undefined || query.op2 === undefined) {
            res.json({ result: "err:invalid operands" });
            return;
        }

        const opOne: string = (query.op1 as string).trim();
        const opTwo: string = (query.op2 as string).trim();
        res.json({ result: calculateFromOperators(operator, opOne, opTwo) });
    }
}


//api routes for operators
app.get('/api/plus', verifyAuthToken, calculationRequestHandler("plus"));
app.get('/api/minus', verifyAuthToken, calculationRequestHandler("minus"));
app.get('/api/division', verifyAuthToken, calculationRequestHandler("division"));
app.get('/api/multiply', verifyAuthToken, calculationRequestHandler("multiply"));


//expression evaluation
app.get('/api/evaluate', verifyAuthToken, (req: Request, res: Response)=>{
    const query = req.query as any;
    if (query.expr === undefined) {
        res.json({ result: "err:invalid expression" });
        return;
    }
    res.json({ result: evaluateExpression(query.expr as string)  });
});



//this creates api auth token, we jwt with fake user login to get auth token
app.post('/api/login', (req: Request, res: Response) => {
    res.json({ authToken: createAuthToken("testcalculatoruser") });
});

export default app;