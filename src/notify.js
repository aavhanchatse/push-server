import { messaging } from './firebaseInit';

export const sendNotificationToClient = (tokens, data, options) => {
  // Send a message to the devices corresponding to the provided
  // registration tokens.
  messaging
    .sendToDevice(tokens, data, options)
    .then((response) => {
      console.log('Notification sent: ', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
};
