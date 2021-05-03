import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";

import Calculator from './Calculator';

describe('test calculator component', () => {
  const body =render(<Calculator  authToken=""  />);

  test(`test all buttons rendering`,async ()=>{
    expect(await body.findByTestId("BTN_NUM0")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM1")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM2")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM3")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM4")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM5")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM6")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM7")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM8")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_NUM9")).toBeInTheDocument();

    expect(await body.findByTestId("BTN_DIVISION")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_MULTIPLY")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_MINUS")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_PLUS")).toBeInTheDocument();

    expect(await body.findByTestId("BTN_PERCENT")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_CLEAR")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_PLUS_MINUS")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_DECIMAL")).toBeInTheDocument();
    expect(await body.findByTestId("BTN_EQUAL")).toBeInTheDocument();

  });
  
 
})

