const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "pj1",
};

const insertdata = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  //query
  const query = `INSERT INTO registration values(?,?,?,?,?)`;
  connection.queryAsync(query, [
    user.firstName,
    user.lastName,
    user.mob,
    user.email,
    user.password,
  ]);
  //console.log("WElcome Everyone!");
  await connection.endAsync();
};

const selectAll = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  //query
  const query = `SELECT * FROM registration`;
  const list = connection.queryAsync(query, []);

  await connection.endAsync();
  return list;
};

module.exports = { insertdata, selectAll };
