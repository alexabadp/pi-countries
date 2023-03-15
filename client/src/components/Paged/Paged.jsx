import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import "./paged.css";

const Paged = ({ countriesPerPage, countries, paged }) => {
  const currentPage = useSelector((state) => state.currentPage);

  const [input, setInput] = useState(1);

  useEffect(() => {
    setInput(currentPage);
  }, [currentPage]);

  const maxPage = Math.ceil(countries / countriesPerPage);

  const previousPage = () => {
    setInput(parseInt(input) - 1);
    paged(parseInt(currentPage) - 1);
  };

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    paged(parseInt(currentPage) + 1);
  };

  const handleChange = (e) => {
    setInput(e.target.value);

    let pag = 0;

    if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > maxPage) {
      pag = 1;
      setInput(1);
    } else if (e.target.value.length === 0) {
      pag = 1;
    } else {
      pag = parseInt(e.target.value);
    }

    paged(parseInt(pag));
  };

  return (
    <div className="paged__contenedor">
      <button
        className="paged__previous"
        disabled={currentPage === 1 || currentPage < 1}
        onClick={previousPage}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <input
        onChange={(e) => handleChange(e)}
        type="number"
        name="page"
        autoComplete="off"
        value={input}
      />
      <p> del {maxPage} </p>
      <button
        className="paged__next"
        disabled={currentPage === maxPage || currentPage > maxPage}
        onClick={nextPage}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Paged;
