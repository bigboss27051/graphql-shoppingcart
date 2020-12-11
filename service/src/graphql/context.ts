import { ForbiddenError, AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken'
import { RESPONSE_MESSAGE } from '../common/constanst';
import config from '../configs';

const context = ({ req, res }) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) throw new AuthenticationError(RESPONSE_MESSAGE.AUTH_FAIL);
    
    const token = authorization.split(' ')[1];

    const decode = jwt.verify(token, config.jwt.secretKey);
    return {
      loggedInUser: typeof decode === 'object' ? decode.data['username'] : decode 
    };

  } catch (error) {
    throw new ForbiddenError(error.message);
  }
};

export default context;