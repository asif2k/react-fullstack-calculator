import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";

import Button, { ButtonProps } from "./Button";



const renderButtonTest=async (position:string)=>{
  
 const body= render(<Button position={position} title="anytitle" handleClick={()=>{}} />);
  const btn=await body.findByTestId(position);
 return expect(btn).toBeInTheDocument();
}

describe('test all buttons rendering', () => {

  test(`should render BTN_NUM0`,async ()=>{
    await renderButtonTest("BTN_NUM0");
  });
  
  test(`should render BTN_NUM1`,async ()=>{
    await renderButtonTest("BTN_NUM1");
  });
  
  test(`should render BTN_NUM2`,async ()=>{
    await renderButtonTest("BTN_NUM2");
  });
  
  test(`should render BTN_NUM3`,async ()=>{
    await renderButtonTest("BTN_NUM3");
  });
  
  test(`should render BTN_NUM4`,async ()=>{
    await renderButtonTest("BTN_NUM4");
  });
  
  test(`should render BTN_NUM5`,async ()=>{
    await renderButtonTest("BTN_NUM5");
  });
  
  test(`should render BTN_NUM6`,async ()=>{
    await renderButtonTest("BTN_NUM6");
  });
  
  
  test(`should render BTN_NUM7`,async ()=>{
    await renderButtonTest("BTN_NUM7");
  });
  
  test(`should render BTN_NUM8`,async ()=>{
    await renderButtonTest("BTN_NUM8");
  });
  
  test(`should render BTN_NUM9`,async ()=>{
    await renderButtonTest("BTN_NUM9");
  });
  
  test(`should render BTN_DIVISION`,async ()=>{
    await renderButtonTest("BTN_DIVISION");
  });
  test(`should render BTN_MULTIPLY`,async ()=>{
    await renderButtonTest("BTN_MULTIPLY");
  });
  
  test(`should render BTN_MINUS`,async ()=>{
    await renderButtonTest("BTN_MINUS");
  });
  test(`should render BTN_PLUS`,async ()=>{
    await renderButtonTest("BTN_PLUS");
  });
  
  test(`should render BTN_PERCENT`,async ()=>{
    await renderButtonTest("BTN_PERCENT");
  });
  
  test(`should render BTN_CLEAR`,async ()=>{
    await renderButtonTest("BTN_CLEAR");
  });
  
  test(`should render BTN_PLUS_MINUS`,async ()=>{
    await renderButtonTest("BTN_PLUS_MINUS");
  });
  
  test(`should render BTN_DECIMAL`,async ()=>{
    await renderButtonTest("BTN_DECIMAL");
  });
  
  test(`should render BTN_EQUAL`,async ()=>{
    await renderButtonTest("BTN_EQUAL");
  });
  

})

