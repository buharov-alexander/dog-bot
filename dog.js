const axios = require('axios');

const DOG_ENDPOINT = 'https://dog.ceo/api/breeds/image/random';

module.exports = {
  getRandomDogURL() {
    return axios.get(DOG_ENDPOINT)
      .then(res => res.data.message)
      .catch(err => console.error(err, 'Get random dog image error'));
  }
}