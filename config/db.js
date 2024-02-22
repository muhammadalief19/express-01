import mysql from "mysql";

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_pemrograman_framework",
});

connection.connect((error) => {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connection Success");
  }
});

export default connection;
