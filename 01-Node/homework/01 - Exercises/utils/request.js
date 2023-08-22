const axios = require('axios');

function request (url, callback) {
  try {
    axios.get(url)
      .then((response) => {
        callback(null, response.data);
      })
      .catch(error => {
        throw error
      });   
  } catch (err) {
    callback(err);
  }
}

module.exports = {
  request
};