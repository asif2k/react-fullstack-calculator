import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';


import API from './API'

//Fetch auth token to call apis , later there can be a user login feature that can get auth token

API.login().then((authToken:string)=>{
  console.log("authToken",authToken); 
  ReactDOM.render(
    <App authToken={authToken}/> ,  
  document.getElementById("container"));
  if (module && module.hot) {
    module.hot.accept();  
    module.hot.addStatusHandler(status => {
      if (status === 'prepare') console.clear();
    });
  }
})


