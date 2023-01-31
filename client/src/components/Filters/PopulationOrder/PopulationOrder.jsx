import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  getCountriesByPopulation,
  setCurrentPage,
} from "../../../redux/actions";

import "./populationOrder.css";

const PopulationOrder = () => {
  const dispatch = useDispatch();

  const handlePopulationOrder = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(getCountriesByPopulation(event.value));
  };

  const options = [
    {
      value: "min",
      label: "Min to Max",
    },
    {
      value: "max",
      label: "Max to Min",
    },
  ];

  return (
    <div className="population-contenedor">
      <label>Population </label>
      <Select
        className="population-select"
        options={options}
        onChange={handlePopulationOrder}
      />
    </div>
  );
};

export default PopulationOrder;
