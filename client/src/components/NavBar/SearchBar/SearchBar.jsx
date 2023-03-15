import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountriesByName } from "../../../redux/actions";

import "./searchBar.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  // CREAMOS UN ESTADO LOCAL PARA EL INPUT
  const [input, setInput] = useState("");

  const handlerChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(getCountriesByName(input));
      setInput("");
    } catch (error) {
      alert(error);
      setInput("");
    }
  };

  return (
    <div className="buscar">
      <input
        className="searchBar-input"
        type="text"
        placeholder="Search Country"
        value={input}
        onChange={handlerChange}
      />
      <div className="btn">
        <i onClick={(e) => handleSubmit(e)} className="fas fa-search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
