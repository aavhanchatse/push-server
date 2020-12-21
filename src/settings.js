import dotenv from 'dotenv';
dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;

export const googleApplicationCredentials = process.env.GOOGLE_APPLICATION_CREDENTIALS;
