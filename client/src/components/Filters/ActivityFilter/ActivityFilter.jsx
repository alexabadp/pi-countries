import React from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCountriesByActivity, setCurrentPage } from "../../../redux/actions";

import "./activityFilter.css";

const ActivityFilter = () => {
  const activities = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  const handleActivityFiltered = (event) => {
    dispatch(setCurrentPage(1));
    dispatch(getCountriesByActivity(event.value));
  };

  const options = activities.map((a) => {
    return {
      value: a.name,
      label: a.name,
    };
  });

  return (
    <div className="activities-contenedor">
      <label>Activities</label>
      <Select
        className="activities-select"
        options={options}
        onChange={handleActivityFiltered}
      />
    </div>
  );
};

export default ActivityFilter;
