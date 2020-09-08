const { dialog } = require('electron');

const eDialog = require('electron-dialogbox');
async function showDialog(url, opt, input) {
    let parent = opt.parent;
    if (parent) { parent.setEnabled(false); }
    let dialog = await eDialog.showDialog(url, opt, input);
    return dialog;
}

module.exports = {
    showLoginDialog: async function (parent) {
        return await showDialog(`file:///ui/login_window/index.html`,
            {
                width: 800, height: 600, parent: parent, modal: true, minimizable: false, resizable: false, webPreferences: {
                    nodeIntegration: true,
                    enableRemoteModule: true,
                }
            });
    },
}
