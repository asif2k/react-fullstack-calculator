
import {API_URL} from "./config.json"



const  API= {

  // fake login that generate auth token for api calls
  login:async ():Promise<string>=>{  
    return new Promise<string>(resolve=>{
      fetch(`${API_URL}/login`, {method:"POST"}).then(res=>{
        res.json().then((authToken)=>{
          resolve(authToken.authToken)
        });
      })
    })   
  },

  // generic calculation api for operators
  calc:async (token:string,calc:string, opOne:string,opTwo:string):Promise<string> =>{
    return new Promise<string>(resolve=>{
      fetch(`${API_URL}/${calc}?op1=${opOne}&op2=${opTwo}`, {headers: {'auth': token}}).then(res=>{
        res.json().then((result)=>{
          resolve(result.result.toString())
        });
      })
    })  

  },

  plus:async (token:string, opOne:string,opTwo:string):Promise<string>=>{
    return API.calc(token,"plus",opOne,opTwo);
  },  

  minus:async (token:string, opOne:string,opTwo:string):Promise<string>=>{
    return API.calc(token,"minus",opOne,opTwo);
  },

  division:async (token:string, opOne:string,opTwo:string):Promise<string>=>{
    return API.calc(token,"division",opOne,opTwo);
  },

  multiply:async (token:string, opOne:string,opTwo:string):Promise<string>=>{
    return API.calc(token,"multiply",opOne,opTwo);
  }

}
export default API