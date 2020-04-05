const axios = require('axios');

const TOKEN = process.env.TELEGRAM_TOKEN;
const MESSAGE_ENDPOINT = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const PHOTO_ENDPOINT = `https://api.telegram.org/bot${TOKEN}/sendPhoto`;

module.exports = {
  /**
   * 
   * @param params.text - message
   * @param params.chat_id - chat or user ID
   */
  sendMessage(params) {
    return axios.get(MESSAGE_ENDPOINT, {params})
      .then(() => console.log('Send message to bot', params))
      .catch(err => console.error(err, 'Send message error'));
  },

  /**
   * 
   * @param params.photo - photo
   * @param params.chat_id - chat or user ID
   */
  sendPhoto(params) {
    return axios.get(PHOTO_ENDPOINT, {params})
      .then(() => console.log('Send photo to bot', params))
      .catch(err => console.error(err, 'Send photo error'));
  }
};