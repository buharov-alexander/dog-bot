const telegram = require('./telegram');
const dog = require('./dog');

module.exports = {
  async sendRandomDogImage(chatId) {
    const imageUrl = await dog.getRandomDogURL();
    return telegram.sendPhoto({
      photo: imageUrl,
      chat_id: chatId
    });
  },

  sendText(text, chatId) {
    return telegram.sendMessage({
      text: text,
      chat_id: chatId
    });
  }
}