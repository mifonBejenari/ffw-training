import { SessionOptions } from 'iron-session';
import { SessionData } from './types';
export const defaultSession: SessionData = {
  userId: 0,
  isLoggedIn: false,
  theme: ''
};

export const sessionOptions: SessionOptions = {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'iron-session',
  cookieOptions: {
    // secure only works in `https` environments
    // if your localhost is not on `https`, then use: `secure: process.env.NODE_ENV === "production"`
    secure: true
  }
};
