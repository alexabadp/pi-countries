import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  const dispatch = useDispatch();

  // const countries = useSelector((state) => state.countries);

  //Cuando se monte el Home que haga el dispatch
  //Con useEffect() manejamos el ciclo de vida del componente
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Filters />
      <CardsContainer />
    </>
  );
};

export default Home;
