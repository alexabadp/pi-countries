import ActivityFilter from "./ActivityFilter/ActivityFilter";
import AlphabetOrder from "./AlphabetOrder/AlphabetOrder";
import ContinentFilter from "./ContinentFilter/ContinentFilter";
import PopulationOrder from "./PopulationOrder/PopulationOrder";
import "./filters.css";

const Filters = () => {
  return (
    <div>
      <nav className="nav">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            <div>
              <ContinentFilter />
            </div>
          </li>
          <li>
            <div>
              <ActivityFilter />
            </div>
          </li>
          <li>
            <div>
              <AlphabetOrder />
            </div>
          </li>
          <li>
            <div>
              <PopulationOrder />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Filters;
