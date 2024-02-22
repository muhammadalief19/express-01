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

module.exports = router;
