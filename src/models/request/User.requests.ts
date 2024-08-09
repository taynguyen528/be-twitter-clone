import { JwtPayload } from 'jsonwebtoken';
import { TokenType } from '~/constants/enum';

export interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  day_of_birth: string;
}

export interface TokenPayload extends JwtPayload {
  user_id: string;
  token_type: TokenType;
}

export interface LogoutReqBody {
  refresh_token: string;
}
