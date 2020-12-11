import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken'
import { RESPONSE_MESSAGE } from '../common/constanst';
import config from '../configs';

const context = ({ req }) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) return undefined;
    
    const token = authorization.split(' ')[1];

    const decode = jwt.verify(token, config.jwt.secretKey);
    return {
      loggedInUser: typeof decode === 'object' ? decode.data['username'] : decode 
    };

  } catch (error) {
    throw new AuthenticationError(RESPONSE_MESSAGE.INVALID_TOEKN);
  }
};

export default context;