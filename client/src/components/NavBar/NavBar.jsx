import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, setCountryEmpty } from "../../redux/actions";
import SearchBar from "./SearchBar/SearchBar";
import "./navBar.css";

const NavBar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCountries());
    dispatch(setCountryEmpty({}));
  };

  return (
    <div className="nav-bg">
      <nav className="navegacion-principal contenedor">
        <div>
          <Link to="/create">Form </Link>
        </div>
        <div>
          <Link to="/home" onClick={handleClick}>
            All Countries
          </Link>
        </div>
        <div className="search">
          <SearchBar />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
