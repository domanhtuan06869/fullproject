const callApi = require('./call-api');
const dialogUtils = require('./dialog-utils');
const fse = require('fs-extra');
const path = require('path');
const appData = process.env.APPDATA
const messageCode = require('./message/message-code');
const pathSession = path.join(appData, 'waiting-examination', 'session.json');
const windowComom = require('../libs/window-comom');
module.exports = {
  login: async (parent, email, password) => {
    let result = false;
    try {
      let respone = await callApi.login(email, password);
      if (respone.code === 200) {
        //await fse.writeJSON(pathSession, result);
        await windowComom.windowHome();
        result = true;
      }
      if (respone.code === 401) {
        await dialogUtils.showDialogBox(parent, messageCode.M001);
        result = false;
      }
      if (respone.code === 402 || respone.code === 403) {
        await dialogUtils.showDialogBox(parent, messageCode.M002);
        result = false;
      }
    } catch {
      await dialogUtils.showDialogBox(parent, messageCode.M002);
      result = false;
    }
    return result;
  }
}