import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { getCountriesByAlphabet, setCurrentPage } from "../../../redux/actions";

import "./alphabetOrder.css";

const AlphabetOrder = () => {
  const dispatch = useDispatch();

  const handleAlphabeticalOrder = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(getCountriesByAlphabet(event.value));
  };

  const options = [
    {
      value: "asc",
      label: "Ascendent",
    },
    { value: "dsc", label: "Descendent" },
  ];

  return (
    <div className="alphabet-contenedor">
      <label>Alphabetical </label>
      <Select
        className="alphabet-select"
        options={options}
        onChange={handleAlphabeticalOrder}
      />
    </div>
  );
};

export default AlphabetOrder;
