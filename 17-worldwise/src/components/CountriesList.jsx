import Spinner from "./Spinner";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add Your first city by clicking on the map"} />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div>
      <ul className={styles.CountriesList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.country} />
        ))}
      </ul>
    </div>
  );
}

export default CountriesList;
