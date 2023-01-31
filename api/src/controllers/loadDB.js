const axios = require("axios");
const { Country, Activity } = require("../db");

// TRAER PAISES DE LA API
const getCountriesApi = async (req, res) => {
  try {
    const api = await axios.get("https://restcountries.com/v3.1/all");

    const apiInfo = await api.data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.official,
        image: e.flags.png,
        continent: e.continents[0],
        capital: e.capital
          ? e.capital[0].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          : "Not Found",
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      };
    });

    let country = await Country.findAll();
    if (!country.length) await Country.bulkCreate(apiInfo);

    console.log("Database Loaded");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getCountriesApi,
};
