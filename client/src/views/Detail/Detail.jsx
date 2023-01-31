import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actions";
import Activity from "../../components/Activity/Activity";
import "./detail.css";
import NavBarGeneral from "../../components/NavBarGeneral/NavBarGeneral";

const Detail = (props) => {
  const dispatch = useDispatch();

  const id = props.match.params.id;

  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <NavBarGeneral />
      </div>
      <div className="detail__grid__contenedor">
        <section className="detail__grid__item detail__grid__item1">
          <div>
            <img src={country.image} alt="" />
            <h1>{country.name}</h1>
          </div>
        </section>
        <section className="detail__grid__item detail__grid__item2">
          <h3>Code: </h3>
          <p>{country.id}</p>

          <h3>Continent: </h3>
          <p>{country.continent}</p>

          <h3>Capital: </h3>
          <p>{country.capital}</p>
          <h3>Subregion: </h3>
          <p>{country.subregion}</p>
          <h3>Area: </h3>
          <p>{country.area}</p>
          <h3>Population: </h3>
          <p>{country.population}</p>
        </section>
        <section className="detail__grid__item detail__grid__item3">
          {/* {country.activities.lenght > 0 ? ( */}
          {country.activities ? (
            country.activities.map((e) => {
              return (
                <div key={e.id}>
                  <Activity
                    name={e.name}
                    duration={e.duration}
                    difficulty={e.difficulty}
                    season={e.season}
                  />
                </div>
              );
            })
          ) : (
            <h4>Activity Not Found</h4>
          )}
        </section>
      </div>
    </div>
  );
};

export default Detail;
