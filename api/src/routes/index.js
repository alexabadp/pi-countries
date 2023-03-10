const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require("./countries");
const activityRouter = require("./activity");
const activitiesRouter = require("./activities");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);
router.use("/activity", activityRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
