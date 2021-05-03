
import React from 'react';
import Button from './Button';
import Display from './Display';
import API from '../API'

import { CalculatorContainer } from './Styles'
import { ButtonsList, ButtonInfo } from './ButtonsList'

import { OperatorNames, OperatorsNamesMap, NumbersNames } from './Constants'


const resolveExpression = async (authToken: string, expression: string): Promise<string> => {
  console.log("expression", expression);
  return new Promise(resolve => {
    // split expression into left/right operands and operator
    const params = expression.split(" ");
    const operator = params[1].trim();
    const opOne = params[0].trim();
    const opTwo = params[2].trim();
    resolve(API.calc(authToken, operator, opOne, opTwo));

  });
}



type CalculatorProps = {
  authToken: string;
}

const Calculator = ({ authToken }: CalculatorProps): JSX.Element => {

  const [displayValue, setDisplayValue] = React.useState("0");
  const [typingValue, setTypingValue] = React.useState("");
  const [decimalPlaces, setDecimalPlaces] = React.useState(0);
  const [decimalActive, setDecimalActive] = React.useState(false);
  const [computingResult, setComputingResult] = React.useState(false);
  const [expression, setExpression] = React.useState("");


  const evaluateResult = async (expression: string, clearExpression: Boolean, operator?: string) => {
    if (computingResult) return;

    setComputingResult(true);

    //resolve result from expression
    let result = await resolveExpression(authToken, expression) as string;

    console.log(`${expression}=${result}`);


    //if result contains error then do not proceed with the expression and clear the expression
    if (result.indexOf("err") > -1) {
      setExpression("");
      setDisplayValue(result);
      setComputingResult(false);
      setTypingValue("");
      return;
    }

    //handl decimal numbers , since result may contain many decimal numbers. we have to limit it
    if (decimalPlaces === 0 && result.indexOf(".") > -1) {
      result = parseFloat(parseFloat(result).toFixed(4)).toString() ;
      setDecimalPlaces(4);
    }

    setDisplayValue(result);

    //if there is no expression to proceed then clear the expression otherwise join result with next operator that user had triggered
    if (clearExpression)
    {
      setExpression("");
    }
      else{
        setExpression(result + operator);
      }
      

    setComputingResult(false);

  }

  //useEffect hook to activate when typing value is changed and display the value
  React.useEffect(() => {
    if (typingValue !== "") {
      setDisplayValue(typingValue);
    }
  }, [typingValue]);


  const clearMemoryAndDisplay = () => {
    setTypingValue("");
    setExpression("");
    setDecimalPlaces(0);
    setDisplayValue("0");
  }

  //handle operator input to check if expression need to be resolved , for example user has input two numbers already
  const handleOperatorsInput = (operator: string) => {
    setDecimalActive(false);
    const op = OperatorsNamesMap[operator];
    if (expression !== "") {
      evaluateResult(expression + typingValue, false, op);
    }
    else{
      if(typingValue!==""){
        setExpression(typingValue + op);
      }
    }
      

    setTypingValue("");
  }


  //handle numbers input
  const handleNumbersInput = (num: string) => {
    setTypingValue(typingValue + num);
    if (decimalActive) setDecimalPlaces(decimalPlaces + 1);
  }

  //handle decimal input , to check if there is already a decimal in the typed value, or user started the value with decimal
  //also count the decimal numbers user typed , so we can use it to display the result
  const handleDecimalInput = (key: string) => {
    if (typingValue === "") {
      setTypingValue("0.");
      setDecimalActive(true);
      setDecimalPlaces(1);
    }
    else {
      if (typingValue.indexOf('.') < 0) {
        setDecimalActive(true);
        setDecimalPlaces(1);
        setTypingValue(typingValue + key);
      }
    }
  }

  //activates minus/plus value sign
  const handlePlusMinusInput = (key: string) => {
    setDecimalActive(false);
    if (typingValue === "") return;
    if (typingValue.startsWith("-")) {
      setTypingValue(typingValue.replace("-", ""));
    }
    else {
      setTypingValue("-" + typingValue);
    }
  }
 

  //if user input equal action then process the pending expression if there is already and then clear the expression
  //here we can improve and add a feature to continue with the expression by each time user press equal
  const handleEqualInput = () => {
    if (expression !== "") {
      evaluateResult(expression + typingValue, true);
    }
    setTypingValue("");
  };

  //handle percent action , with this action the second operand used as a percent of first operand
  //then apply the particular action for example plus or minus the percentage from the value of first operand
  const handlePercentInput = () => {
    if (expression !== "") {
      evaluateResult(expression + typingValue+'%', true);
    }
    setTypingValue("");
  };

  //handle overall input actions
  const handleInput = (key: string) => {
    if (key !== ".") {
      setDecimalActive(false);
    }
    else {
      handleDecimalInput(key);
      return;
    }

    if (key === "C") {
      clearMemoryAndDisplay();
    }
    else if (key === "=") {
      handleEqualInput();
    }
    else if (key === "%") {
      handlePercentInput();
    }

    else if (key === "+/-") {
      handlePlusMinusInput(key);
    }
    else if (OperatorNames.indexOf(key) > -1) {
      handleOperatorsInput(key);
    }
    else if (NumbersNames.indexOf(key) > -1) {
      handleNumbersInput(key);
    }
  }


  const handleButtonClick = (title: string) => {
    handleInput(title);
  }

  return (
    <CalculatorContainer>
      <Display
        expression={expression}
        decimalPlaces={decimalPlaces}
        value={displayValue}
        computingResult={computingResult}
      />

      {ButtonsList.map((b: ButtonInfo, i: number) => {
        return <Button
          handleClick={handleButtonClick}
          key={b.position}
          position={b.position}
          title={b.title} />
      })}
    </CalculatorContainer>
  );
}



export default Calculator;
