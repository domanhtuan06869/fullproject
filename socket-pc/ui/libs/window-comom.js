
const { BrowserWindow } = require('electron');
const path = require('path');
const openWindow = async (pathUrl, options = {}) => {
    options.webPreferences = {
        nodeIntegration: true,
        enableRemoteModule: true
    }
    const mainWindow = new BrowserWindow(options)
    mainWindow.loadURL(path.join(__dirname, pathUrl));
    mainWindow.webContents.openDevTools();
    return mainWindow;
}
module.exports = {
    windowHome: () => {
        return openWindow('../login_window/index.html',{  width: 800, height: 600, minimizable: false, resizable: false })
    }

}
