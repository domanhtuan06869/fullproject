const { dialog } = require('electron');
const path = require('path');
const eDialog = require('electron-dialogbox');
async function showDialog(url, options, input) {
    options.webPreferences = {
        nodeIntegration: true,
        enableRemoteModule: true,
    };
    let parent = options.parent;
    if (parent) { parent.setEnabled(false); }
    let dialog = await eDialog.showDialog(url, options, input);
    return dialog;
}
module.exports = {
    showLoginDialog: function (parent) {
        return showDialog(path.join(__dirname, '../login_window/index.html'),
            { width: 800, height: 600, parent: parent, modal: true, resizable: false, minimizable: false, });
    },

    /*dialog electron*/
    showDialogBox: (parent, option) => {
        return dialog.showMessageBoxSync(parent, option);
    }
}
