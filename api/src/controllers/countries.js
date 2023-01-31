const { Country, Activity } = require("../db");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

const getCountryDb = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const countryByName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });

      if (countryByName.length) {
        let country = countryByName.map((e) => {
          return {
            id: e.id,
            name: e.name,
            image: e.image,
            continent: e.continent,
            activities: e.activities.map((e) => e.name),
            population: e.population,
          };
        });
        return res.status(200).send(country);
      }
      return res.status(400).json("Country Not Found");
    } else {
      const countryAll = await Country.findAll({
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      let countries = countryAll.map((e) => {
        return {
          id: e.id,
          name: e.name,
          image: e.image,
          continent: e.continent,
          activities: e.activities.map((e) => e.name),
          population: e.population,
        };
      });
      return res.status(200).send(countries);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCountryDbById = async (req, res) => {
  try {
    const { id } = req.params;

    const count = await Country.findByPk(id, {
      include: {
        model: Activity,
        //attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    // let arrayCountry = [];
    // arrayCountry.push(count);

    // let country = arrayCountry.map((e) => {
    //   return {
    //     id: e.id,
    //     name: e.name,
    //     image: e.image,
    //     continent: e.continent,
    //     capital: e.capital,
    //     subregion: e.subregion,
    //     area: e.area,
    //     population: e.population,
    //     activities: e.activities,
    //   };
    // });

    return res.status(200).send(count);
    // return res.send(count);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  getCountryDb,
  getCountryDbById,
};
