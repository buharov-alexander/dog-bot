const axios = require('axios');

const TOKEN = process.env.TELEGRAM_TOKEN;
const ENDPOINT = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

module.exports = {
  /**
   * 
   * @param params.text - message
   * @param params.chat_id - chat or user ID
   */
  sendMessage(params) {
    return axios.get(ENDPOINT, {params})
      .then(() => console.log('Send message'))
      .catch(err => console.error(err, 'Send message error'));
  }
};