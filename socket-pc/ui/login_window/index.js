const { remote } = require('electron')
remote.getCurrentWindow().openDevTools()
const commom = remote.require('./ui/libs/commom')


$(document).ready(function () {
    $('#ok').on('click',async ()=>{
        await commom.openWindow(`file:///ui/login_window/index.html`);
        window.dialog.exit(true)
    })
})