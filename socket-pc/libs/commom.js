
const { BrowserWindow } = require('electron')

module.exports = {
    openWindow: async function (path) {
        const mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        })

        mainWindow.loadURL(path)
        // Open the DevTools.
        mainWindow.webContents.openDevTools()
    }
}