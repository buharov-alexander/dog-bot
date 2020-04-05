const express = require('express');
const bodyParser = require('body-parser');
const bot = require('./src/bot')

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.post('/', (req, res) => {
  const {body} = req;
  console.log("Message from bot:", {text: body.message.text, chat_id: body.message.from.chat});
  
  if (body.message) {
    const {text, chat} = body.message;

    if (text === '/image') {
      return bot.sendRandomDogImage(chat.id)
        .then(() => res.json({}));
    } else {
      return bot.sendText('Woof!', chat.id)
        .then(() => res.json({}));
    }
  }

  console.warn("Cannot handle message");
  res.json({});
});

app.listen(port, () => console.log(`Application start on http://localhost:${port}`));