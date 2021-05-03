import React from 'react';
import { DisplayContiner } from './Styles'


export type DisplayProps = {
  value: string,
  decimalPlaces: number,
  computingResult: boolean,
  expression: string
}

const Display = ({
  value,
  decimalPlaces,
  computingResult,
  expression
}: DisplayProps): JSX.Element => {



  const getValue = (): string => {

    // if value contains error , display error in expression box instead
    if (value.indexOf("err:") > -1) {
      expression = value.replace("err:", "");
      return "0";
    }

    //handle number of decimal , since return result may contain many decimal numbers , so we have to limit it
    const v = value.split(".");
    if (v.length > 1) {
      return parseFloat(v[0]).toLocaleString('en-us', { minimumFractionDigits: 0 }) + '.' + v[1].substr(0, decimalPlaces);
    } else {
      return parseFloat(v[0]).toLocaleString('en-us', { minimumFractionDigits: 0 })
    }

  }

  return (
    <DisplayContiner>
      <h1 data-testid="display-value" >{computingResult ? ".." : getValue()}</h1>
      <i>{expression}</i>
    </DisplayContiner>
  );
};


export default Display;


