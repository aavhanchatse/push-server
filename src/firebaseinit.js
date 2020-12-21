var admin = require('firebase-admin');

import { googleApplicationCredentials } from './settings';

var serviceAccount = require(googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chatify-8749a.firebaseio.com',
});

export const messaging = admin.messaging();
