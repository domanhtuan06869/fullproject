// Modules to control application life and create native browser window
const  { app } = require('electron')
const path = require('path')
const commom = require('./libs/commom')
async function createWindow() {
  await commom.openWindow(`file://${__dirname}/ui/login_window/index.html`)
}

app.whenReady().then(async() => {
 await createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})