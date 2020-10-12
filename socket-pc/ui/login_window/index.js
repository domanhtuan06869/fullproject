const { remote } = require('electron')
const usersAction = remote.require('./ui/libs/users-action')
remote.getCurrentWindow().openDevTools();

$(document).ready(function () {

    $('#ok').on('click', async () => {
        const email = $('#email').val().trim();
        const password = $('#email').val().trim();
      //  if (!isValidate(email, password)) return;
        let isLogin = await usersAction.login(remote.getCurrentWindow(), email, password);
        if (isLogin) {
            window.dialog.exit();
        }
    })

    const isValidate = (email, password) => {
        const regxEmall = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email === '' || password === '') {
            alert('ko để tróng')
            return false;
        }
        if (!regxEmall.test(email)) {
            alert(' sai email')
            return false;
        }
        return true;
    }
});