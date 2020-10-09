const callApi = require('./call-api');
const dialogUtils = require('./dialog-utils');
const fse = require('fs-extra');
const path = require('path');
const appData = process.env.APPDATA
const messageCode = require('./message/message-code');
const pathSession = path.join(appData, 'waiting-examination', 'session.json');
module.exports = {
  login: async (parent, email, password) => {
    try {
      const respone = await callApi.login(email, password)
      if (respone.code === 200) {
        await fse.writeJSON(pathSession, result);
        return true;
      }
      if (respone.code === 401) {
        dialogUtils.showDialog(null, messageCode.M001)
        return false;
      }
      if (respone.code === 402) {
        return false;
      }
    } catch{

    }
  }
}