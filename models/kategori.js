const connection = require("../config/db");

class Kategori {
  // method getAll()
  static async getAll() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM kategori ORDER BY id_kategori DESC",
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  //method store()
  static async store(data) {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO kategori set ? ", data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  // method find
  static async find(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM kategori WHERE id_kategori=?",
        id,
        (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });
  }

  // method update
  static async update(id, data) {
    return new Promise((resolve, reject) => {
      connection.query(
        "UPDATE kategori set ? where id_kategori = " + id,
        data,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  // method delete
  static async delete(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM kategori WHERE id_kategori=?",
        id,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      );
    });
  }
}

module.exports = Kategori;
