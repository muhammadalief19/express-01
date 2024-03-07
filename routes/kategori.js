var express = require("express");
var connection = require("../config/db");
const Kategori = require("../models/Kategori");

let router = express.Router();

router.get("/", async (req, res, next) => {
  let rows = await Kategori.getAll();
  res.render("kategori/index", {
    data: rows,
  });
});

router.get("/create", (req, res, next) => {
  res.render("kategori/create", { nama_kategori: "" });
});

router.post("/store", async (req, res, next) => {
  try {
    let { nama_kategori } = req.body;
    let data = {
      nama_kategori,
    };
    await Kategori.store(data);
    req.flash("success", "Berhasil menyimpan data");
    res.redirect("/kategori");
  } catch (error) {
    req.flash("error", "Terjadi kesalahan");
    res.redirect("/kategori");
  }
});

router.get("/edit/(:id)", async (req, res, next) => {
  let { id } = req.params;
  let rows = await Kategori.find(id);
  res.render("kategori/update", {
    data: rows[0],
  });
});

router.post("/update/(:id)", async (req, res, next) => {
  try {
    let { id } = req.params;
    let { nama_kategori } = req.body;
    let data = {
      nama_kategori,
    };
    await Kategori.update(id, data);
    req.flash("success", "Berhasil mengupdate data");
    res.redirect("/kategori");
  } catch (error) {
    req.flash("error", "Terjadi kesalahan");
    res.redirect("/kategori");
  }
});

router.get("/delete/(:id)", async (req, res, next) => {
  let { id } = req.params;

  await Kategori.delete(id);
  req.flash("success", "Berhasil Menghapus Data");
  res.redirect("/kategori");
});

module.exports = router;
