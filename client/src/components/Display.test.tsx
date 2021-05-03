import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";

import Display from './Display';


describe('test display component', () => {
  test('should display 99',async ()=>{ 
    const body =render(<Display  value="99" expression="" decimalPlaces={0} computingResult={false}  />);
    const h1 =await body.findByTestId("display-value");
    expect(h1).toHaveTextContent('99');
  });
 
  test('should display .. while is computingResult is true',async ()=>{ 
    const body =render(<Display  value="99" expression="" decimalPlaces={0} computingResult={true}  />);
    const h1 =await body.findByTestId("display-value");
    expect(h1).toHaveTextContent('..');
  });

  test('should display 3 decimal places instead of 5 for this number 99.12345',async ()=>{ 
    const body =render(<Display  value="99.12345" expression="" decimalPlaces={3} computingResult={false}  />);
    const h1 =await body.findByTestId("display-value");
    expect(h1).toHaveTextContent('99.123');
  });

})

