const express = require('express');
const router = express.Router();
const userSecurity = require('../libs/user-security');
const QUERY_SQL = require('../libs/query');

/* GET users listing. */
router.post('/register', async (req, res, next) => {
  let { email, password } = req.body;
  let passwordEndcode = await userSecurity._encoded(password);
  let queryRegistry = QUERY_SQL.queryRegister(email, passwordEndcode);
  try {
    let queryCheck = QUERY_SQL.queryLogin(email);
    let checkUser = await req.querySql(queryCheck);
    if (checkUser[0]) {
      res.send({ code: 400, message: 'email already exits' });
      return;
    }
    let result = await req.querySql(queryRegistry);
    if (result) {
      res.send({ code: 200, data: result, message: 'success' });
    } else {
      res.send({ status: 401, message: 'register fail' });
    }
  } catch (e) {
    console.log(e);
    res.send({ status: 402, message: 'register fall' });
  }
});

router.post('/login', async (req, res, next) => {
  let { email, password } = req.body;
  let passwordEndcode = await userSecurity._encoded(password);
  let query = QUERY_SQL.queryLogin(email);
  try {
    let result = await req.querySql(query);
    if (result[0].email === email) {
      if (result[0].password === passwordEndcode) {
        res.send({ code: 200, data: result, message: 'success' });
      } else {
        res.send({ status: 401, message: 'password fail' });
      }
    } else {
      res.send({ status: 402, message: 'email does not exits' });
    }
  } catch (e) {
    res.send({ status: 403, message: 'login fail' });
  }
});

router.get('/aaa', async (req, res) => {
  let result = await req.querySql("select * from Product");
  res.send(result)
});

module.exports = router;
