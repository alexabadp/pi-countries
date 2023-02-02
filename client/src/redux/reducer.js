import {
  GET_ACTIVITIES,
  GET_COUNTRIES,
  GET_COUNTRIES_BY_ACTIVITY,
  GET_COUNTRIES_BY_ALPHABET,
  GET_COUNTRIES_BY_CONTINENT,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_POPULATION,
  GET_COUNTRY_BY_ID,
  SET_CURRENT_PAGE,
  SET_COUNTRY_EMPTY,
} from "./actions";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  country: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_COUNTRIES_BY_CONTINENT:
      const continentFiltered = state.allCountries.filter(
        (c) => c.continent === action.payload
      );
      return {
        ...state,
        countries: continentFiltered,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case GET_COUNTRIES_BY_ACTIVITY:
      const activityFiltered = state.allCountries.filter((c) =>
        c.activities?.some(
          (a) => a.toLowerCase() === action.payload.toLowerCase()
        )
      );
      return {
        ...state,
        countries: activityFiltered,
      };

    case GET_COUNTRIES_BY_ALPHABET:
      const alphabetFiltered =
        action.payload === "asc"
          ? state.countries.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.countries.slice().sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      return {
        ...state,
        countries: alphabetFiltered,
      };

    case GET_COUNTRIES_BY_POPULATION:
      const populationFiltered =
        action.payload === "min"
          ? state.countries.slice().sort(function (a, b) {
              if (a.population > b.population) return 1;
              if (a.population < b.population) return -1;
              return 0;
            })
          : state.countries.slice().sort(function (a, b) {
              if (a.population < b.population) return 1;
              if (a.population > b.population) return -1;
              return 0;
            });
      return {
        ...state,
        countries: populationFiltered,
      };

    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        country: action.payload,
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_COUNTRY_EMPTY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
