import dotenv from 'dotenv';

dotenv.config();

export const config = {
  TOMTOM_API_KEY: process.env.TOMTOM_API_KEY || '',
};
