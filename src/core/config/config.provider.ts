import * as dotenv from 'dotenv';

dotenv.config();

export const configProvider = {
  jwtKey: process.env.JWTKEY,
  tokenExpiration: process.env.TOKEN_EXPIRATION,
};
