import { getToken } from "../apis/utils/token-utils"
import { TOKEN_KEY } from "../constants/login.constants"

export default function useToken() {

    function setToken(token:string){
       return localStorage.setItem(TOKEN_KEY,token)
    }
    function removeToken(){
      return localStorage.getItem(TOKEN_KEY)
    }
    
  return {getToken , setToken , removeToken}
}

