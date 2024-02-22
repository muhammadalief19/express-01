var express = require("express");
var connection = require("../config/db");

let router = express.Router();

router.get("/", (req, res, next) => {
  connection.query(
    "SELECT * FROM kategori ORDER BY id_kategori DESC",
    (err, rows) => {
      if (err) {
        req.flash("error", err);
      } else {
        res.render("kategori/index", {
          data: rows,
        });
      }
    }
  );
});

router.get("/create", (req, res, next) => {
  res.render("kategori/create", { nama_kategori: "" });
});

router.post("/store", (req, res, next) => {
  try {
    let { nama_kategori } = req.body;
    let data = {
      nama_kategori,
    };
    connection.query("INSERT INTO kategori set ? ", data, (err, result) => {
      if (err) {
        req.flash("error", "Gagal menyimpan data");
      } else {
        req.flash("success", "Berhasil menyimpan data");
      }
      res.redirect("/kategori");
    });
  } catch (error) {
    req.flash("error", "Terjadi kesalahan");
    res.redirect("/kategori");
  }
});

module.exports = router;
