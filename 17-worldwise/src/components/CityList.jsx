import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Message from "./Message";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add Your first city by clicking on the map"} />;

  return (
    <div>
      <ul className={styles.CityList}>
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
}

export default CityList;
