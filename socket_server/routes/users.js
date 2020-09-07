const express = require('express');
const router = express.Router();
const userSecurity = require('../libs/user-security');

/* GET users listing. */
router.post('/register', async (req, res, next) => {
  let { email, password } = req.body;
  let emailEndcode = await userSecurity._encoded(email);
  let passwordEndcode = await userSecurity._encoded(password);
  let query = `INSERT INTO users VALUES('${emailEndcode}', '${passwordEndcode}')`;
  try {
    let result = await req.querySql(query);
    if (result) {
      res.send(result)
    } else {
      res.send({ status: 401 });
    }
  } catch (e) {
    res.send({ status: 403 });
  }
});

router.post('/login', async (req, res, next) => {
  let { email, password } = req.body;
  let emailEndcode = await userSecurity._encoded(email);
  let passwordEndcode = await userSecurity._encoded(password);
  let query = `SELECT email,password FROM users where email='${emailEndcode}'`;
  try {
    let result = await req.querySql(query);
    if (result[0].password === passwordEndcode) {
      res.send(result)
    } else {
      res.send({ status: 401 });
    }
  } catch (e) {
    res.send({ status: 403 });
  }
});

module.exports = router;
