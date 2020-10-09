// Modules to control application life and create native browser window
const { app } = require('electron')
const path = require('path')
const dialogUtils = require('./ui/libs/dialog-utils')
async function openDialogWindow() {
  return await dialogUtils.showLoginDialog(null);
}

app.whenReady().then(async () => {
     await openDialogWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) openDialogWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})