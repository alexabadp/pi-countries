const { Router } = require("express");
const { getCountryDb, getCountryDbById } = require("../controllers/countries");
// const { Country } = require("../db");

const router = Router();

router.get("/", getCountryDb);
router.get("/:id", getCountryDbById);

module.exports = router;
