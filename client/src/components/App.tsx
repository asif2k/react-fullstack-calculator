
import React from 'react';

import Calculator from './Calculator';

import {GlobalBodyStyle} from './Styles'

interface AppProps {
  authToken: string;  
}

export default function App({authToken}:AppProps) {
  return <>
  <GlobalBodyStyle/>
  <Calculator authToken={authToken}/>
  </>
}