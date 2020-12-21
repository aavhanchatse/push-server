import { sendNotificationToClient } from '../notify';

export const addMessage = async (req, res) => {
  const { token, message } = req.body;
  //   const columns = 'name, message';
  //   const values = `'${name}', '${message}'`;
  try {
    // const data = await messagesModel.insertWithReturn(columns, values);
    const tokens = [token];

    const notificationData = {
      notification: {
        title: 'New message',
        body: message,
      },
    };

    const options = {
      priority: 'high',
    };

    sendNotificationToClient(tokens, notificationData, options);
    res.status(200).send('Success');
  } catch (err) {
    res.status(200).send('err', err);
  }
};
