module.exports = {
  queryRegistry: (email, password) => {
    return `INSERT INTO users VALUES('${email}', '${password}')`;
  }
}