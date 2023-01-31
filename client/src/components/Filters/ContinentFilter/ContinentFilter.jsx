import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  getCountriesByContinent,
  setCurrentPage,
} from "../../../redux/actions";

import "./continentFilter.css";

const ContinentFilter = () => {
  const dispatch = useDispatch();

  const handleContinentFiltered = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(getCountriesByContinent(event.value));
  };

  const options = [
    {
      value: "North America",
      label: "North America",
    },
    {
      value: "South America",
      label: "South America",
    },
    {
      value: "Antarctica",
      label: "Antarctica   ",
    },
    {
      value: "Asia",
      label: "Asia         ",
    },
    {
      value: "Africa",
      label: "Africa       ",
    },
    {
      value: "Oceania",
      label: "Oceania      ",
    },
    {
      value: "Europe",
      label: "Europe       ",
    },
  ];

  return (
    <div className="continent-contenedor">
      <label>Continents </label>
      <Select
        className="continent-select"
        options={options}
        onChange={handleContinentFiltered}
      />
    </div>
  );
};

export default ContinentFilter;
