import { TOKEN_KEY } from "../../constants/login.constants";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
