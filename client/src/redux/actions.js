import axios from "axios";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_CONTINENT = "GET_COUNTRIES_BY_CONTINENT";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";
export const GET_COUNTRIES_BY_ALPHABET = "GET_COUNTRIES_BY_ALPHABET";
export const GET_COUNTRIES_BY_POPULATION = "GET_COUNTRIES_BY_POPULATION";
export const GET_COUNTRY_BY_ID = "GET_COUNTRY";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_COUNTRY_EMPTY = "SET_COUNTRY_EMPTY";

export const getCountries = () => {
  return async function (dispatch) {
    const dbData = await axios.get("/countries");
    const countries = dbData.data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
};

export const getCountriesByName = (payload) => {
  return async function (dispatch) {
    try {
      const dbData = await axios.get(`/countries?name=${payload}`);
      const countries = dbData.data;
      dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: countries,
      });
    } catch (error) {
      return alert("Recipe Not Found");
    }
  };
};

export const getCountriesByContinent = (payload) => {
  return {
    type: GET_COUNTRIES_BY_CONTINENT,
    payload,
  };
};

export const getActivities = () => {
  return async function (dispatch) {
    const dbData = await axios.get("/activities");
    const activities = dbData.data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activities,
    });
  };
};

export const getCountriesByActivity = (payload) => {
  return {
    type: GET_COUNTRIES_BY_ACTIVITY,
    payload,
  };
};

export const getCountriesByAlphabet = (payload) => {
  return {
    type: GET_COUNTRIES_BY_ALPHABET,
    payload,
  };
};

export const getCountriesByPopulation = (payload) => {
  return {
    type: GET_COUNTRIES_BY_POPULATION,
    payload,
  };
};

export const getCountryById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/countries/${id}`);
    const country = apiData.data;
    dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: country,
    });
  };
};

export const setCurrentPage = (payload) => {
  return {
    type: SET_CURRENT_PAGE,
    payload,
  };
};

export const setCountryEmpty = (payload) => {
  return {
    type: SET_COUNTRY_EMPTY,
    payload,
  };
};
