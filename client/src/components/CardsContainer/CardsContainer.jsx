import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentPage } from "../../redux/actions";
import Card from "../Card/Card";
import Paged from "../Paged/Paged";
import "./cardsContainer.css";

const CardsContainer = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries);

  const currentPage = useSelector((state) => state.currentPage);

  //POSIBILIDAD DE LLEVARLO A UN ESTADO GLOBAL PARA QUE HAGA EFECTO EN LOS FILTROS

  // const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paged = (pageNumber) => {
    // setCurrentPage(pageNumber);
    dispatch(setCurrentPage(pageNumber));
    if (pageNumber === 1) {
      setCountriesPerPage(9);
    } else {
      setCountriesPerPage(10);
    }
  };

  return (
    <div>
      <div className="cardsContainer">
        {currentCountries.map((e) => {
          return (
            <div key={e.id} className="cardsContainer-link">
              <Link to={`home/${e.id}`}>
                <Card
                  id={e.id}
                  image={e.image}
                  name={e.name}
                  continent={e.continent}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <Paged
          currentPage={currentPage}
          countriesPerPage={countriesPerPage}
          countries={countries.length}
          paged={paged}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
