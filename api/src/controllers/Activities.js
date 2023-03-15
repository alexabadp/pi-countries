const { Activity } = require("../db");

const getActivityDb = async (req, res) => {
  try {
    const allActivity = await Activity.findAll();

    const activities = allActivity.map((e) => {
      return {
        id: e.id,
        name: e.name,
      };
    });

    res.status(200).send(activities);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getActivityDb };
