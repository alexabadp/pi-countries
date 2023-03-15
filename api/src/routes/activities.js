const { Router } = require("express");
const { getActivityDb } = require("../controllers/Activities");

const router = Router();

router.get("/", getActivityDb);

module.exports = router;
