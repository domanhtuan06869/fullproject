const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  req.io.once('connection', (socket) => {
    socket.on('update', () => {
      req.io.emit('haha', { data: 'ggggggggg' })
    });
    socket.on('disconnect', () => {
      console.log('disconnect');
    })
  });
  res.sendFile('index.html', {
    root: "views"
  })
});

router.get('/users', async function (req, res) {
  let result = await req.querySql('select * from category');
  res.send(result)
});
module.exports = router;
