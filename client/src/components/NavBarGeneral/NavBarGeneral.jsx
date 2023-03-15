import { Link } from "react-router-dom";
import "./navBarGeneral.css";

const NavBarGeneral = () => {
  return (
    <div className="nav-bg">
      <nav className="navegacion-principalG contenedor">
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/create">Form</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarGeneral;
