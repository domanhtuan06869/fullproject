const axios = require('axios');
const url = 'http://localhost:3000/api/'
const sendRequest = (options) => {
  let promise = new Promise((resolve, reject) => {
    axios(options).then(({ data }) => {
      resolve(data)
    }).catch((e) => {
      reject(e)
    })
  });
  return promise;
};
const _METHOD = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE'
};
const contenType = {
  JSON: 'application/json'
};

module.exports = {
  login: (email, password) => {
    let options = {
      method: _METHOD.POST,
      headers: { 'content-type': contenType.JSON },
      data: { email, password },
      url: `${url}users/aaa`
    }
    return sendRequest(options);
  }
}