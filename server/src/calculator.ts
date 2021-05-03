
import {TinyEvaluator} from "./tiny-evaluator"

// perform calculation by operators
export const calculateFromOperators = (operator: string,opOne:string,opTwo:string):string => {
     
    if(opOne.endsWith(".") || opTwo.endsWith(".")){
        return "err:incomplete numbers";
    }    

    let numberOne: number = parseFloat(opOne);
    let numberTwo: number = parseFloat(opTwo);

    if(opTwo.endsWith("%")){

        numberTwo=(numberTwo/100)*numberOne;
    }

    let result: number = 0;
    switch (operator) {
        case "plus":
            result = numberOne + numberTwo;
            break;
        case "minus":
            result = numberOne - numberTwo;
            break;
        case "division":
            if (numberTwo === 0) {
                return "err:division by zero";
            }
            else {
                result = numberOne / numberTwo;
            }

            break;
        case "multiply":
            result = numberOne * numberTwo;
            break;
    }


    return result.toString();
}


//use expression evaluator to process normal arthmatic expressions
const expressionEvaluator=new TinyEvaluator();

export const evaluateExpression = ( expression: string):string => {
     
    const result=expressionEvaluator.evaluate(expression);

    return result.toString();
}