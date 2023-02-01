import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";
import NavBarGeneral from "../../components/NavBarGeneral/NavBarGeneral";
import { getCountries } from "../../redux/actions";
import "./form.css";

function validate(form) {
  const errors = {};
  if (!form.name) errors.name = "Please complete with a recipe name";
  if (form.difficulty < 1 || form.difficulty > 5)
    errors.difficulty = "The difficulty must be a number between 1 and 5";
  if (form.duration < 1 || form.duration > 100)
    errors.duration = "The duration must be a number between 1 and 100";
  if (!form.season)
    errors.season = "Please detail the season for your activity";
  if (!form.countries.length)
    errors.countries = "You must select at least one country";
  return errors;
}

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const history = useHistory();
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    const validations = validate(form);
    setErrors(validations);

    dispatch(getCountries());
  }, [dispatch, form]);

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };

  const handleSelectSeason = (event) => {
    // const season = event.target.value;
    const season = event.value;
    setForm({ ...form, season: season });
  };

  const handleSelectCountry = (event) => {
    // const countries = event.target.value;
    const countries = event.value;

    let newArray = form.countries;
    let find = newArray?.filter((e) => e === countries);

    if (find.length > 0) {
      setForm({ ...form });
    } else {
      setForm({ ...form, countries: [...form.countries, countries] });
    }
  };

  const handleDelete = (event) => {
    setForm({
      ...form,
      countries: form.countries.slice().filter((c) => c !== event),
    });
  };

  const handleSubimit = (event) => {
    event.preventDefault();

    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else {
      axios
        // .post("http://localhost:3001/activity", form)
        .post("/activity", form)
        .then((res) => alert("Activity created"))
        .catch((err) => alert(err));
      history.push("/home");
    }
  };

  const optionsSeason = [
    { value: "summer", label: "Summer" },
    {
      value: "winter",
      label: "winter",
    },
    {
      value: "fall",
      label: "Fall",
    },
    {
      value: "spring",
      label: "Spring",
    },
  ];

  const optionCountries = countries.map((e) => {
    return {
      value: e.name,
      label: e.name,
    };
  });

  return (
    <div>
      <div>
        <NavBarGeneral />
      </div>
      <div className="form__flex">
        <form className="form__contenedor" onSubmit={handleSubimit}>
          <h2>CREATE YOUR ACTIVITY</h2>
          <div>
            <label>Name: </label>
            <input
              placeholder="write the activity name"
              name="name"
              type="text"
              value={form.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.name && <span className="errors">{errors.name}</span>}
          <div>
            <label>difficulty: </label>
            <input
              name="difficulty"
              type="number"
              value={form.difficulty}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.difficulty && (
            <span className="errors">{errors.difficulty}</span>
          )}
          <div>
            <label>Duration: </label>
            <input
              name="duration"
              type="number"
              value={form.duration}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {errors.duration && <span className="errors">{errors.duration}</span>}
          <div>
            <label>Season: </label>
            <Select
              className="form__select"
              options={optionsSeason}
              onChange={handleSelectSeason}
            />
          </div>
          <br />
          {errors.season && <span className="errors">{errors.season}</span>}
          <div>
            <label>Countries: </label>
            <Select
              className="form__select"
              options={optionCountries}
              onChange={handleSelectCountry}
            />
            <br />
            {errors.countries && (
              <span className="errors">{errors.countries}</span>
            )}
            <div className="form__boxes">
              {form.countries.map((e) => (
                <div className="form__box" key={e}>
                  <button type="button" onClick={() => handleDelete(e)}>
                    X
                  </button>
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div className="form__crear">
            <button type="submit" id="form__button">
              Crear Actividad
            </button>
            <button type="button" id="form__button2">
              <Link to="/home">Cancelar</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
