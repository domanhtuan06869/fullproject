module.exports = {
  queryRegister: (email, password) => {
    return `INSERT INTO users VALUES('${email}', '${password}')`;
  },
  queryLogin: (email) => {
  return `SELECT email, password FROM users where email='${email}'`;
  }
}