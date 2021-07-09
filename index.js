const axios = require('axios');

async function AxiosTest() {
  const response = await axios.get('https://www.google.com/');
  return response.status;
}

module.exports = {
  AxiosTest
};