const express = require('express');
const bodyParser = require('body-parser');
const telegram = require('./telegram');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.post('/', (req, res) => {
  const {body} = req;
  console.log(body);
  
  if (body.message) {
    const {text, chat} = body.message;

    return telegram.sendMessage({
      text: 'Hi!',
      chat_id: chat.id
    }).then(() => res.json({}));
  }

  console.warn("Cannot handle message");
  res.json({});
});

app.listen(port, () => console.log(`Application start on http://localhost:${port}`));