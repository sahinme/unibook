import { AuthenticationModel } from "./dto/authenticationModel";
import http from "../httpService";

class TokenAuthService {
  public async authenticate(
    authenticateInput: AuthenticationModel
  ): Promise<string> {
    let result = await http.post("login", authenticateInput);
    return result.data;
  }
}

export default new TokenAuthService();
