import express from 'express';
import { indexPage } from '../controllers';
import { addMessage } from '../controllers';
import { sendNotificationToClient } from '../notify';

const indexRouter = express.Router();

// indexRouter.get('/', indexPage);
indexRouter.post('/messages', (req, res) => {
  const { token, message } = req.body;

  try {
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
    res.status(200).send(`Success ${message}`);
  } catch (err) {
    res.status(200).send('err', err);
  }
});

export default indexRouter;
