
const { BrowserWindow } = require('electron');
const path = require('path');
const openWindow = async (pathUrl, options = {}) => {
    options.webPreferences = {
        nodeIntegration: true,
        enableRemoteModule: true
    }
    const mainWindow = new BrowserWindow(options)
    mainWindow.removeMenu();
    mainWindow.loadURL(path.join(__dirname, pathUrl));
    return mainWindow;
}
module.exports = {
    windowHome: () => {
        return openWindow('../home_window/index.html',{  width: 1000, height: 700, resizable: false });
    }

}
