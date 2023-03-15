const { Router } = require("express");
const { Country, Activity } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    // if (name !== "" && difficulty !== "" && duration !== "" && season !== "") {
    if (name && difficulty && duration && season) {
      const newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });

      let activityCountryDB = await Country.findAll({
        where: { name: countries },
      });

      newActivity.addCountry(activityCountryDB);
      return res.status(200).send(newActivity);
    } else {
      return res.status(500).json("faltan Datos");
    }
    // } else {

    // }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
