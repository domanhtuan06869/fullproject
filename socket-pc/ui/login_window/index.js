const { remote } = require('electron')
remote.getCurrentWindow().openDevTools()
const usersAction = remote.require('./ui/libs/users-action')

$(document).ready(function () {
    $('#ok').on('click',async ()=>{
        let data =await usersAction.login(null,'hgh','hhh');
    })
})