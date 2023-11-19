import { useContext, useEffect } from "react";
import { AppContext } from "../../Contexts/AppContext.jsx";
import { useLocation } from "react-router-dom";

export default function DestinationPage() {
  const { getDestinationData, destination } = useContext(AppContext);
  const location = useLocation();
  const destinationName = location.state;

  useEffect(() => {
    getDestinationData(destinationName);
  }, [destinationName]);

  return (
    <section className={`destination-page ${destinationName}`}>
      <img src={destination?.images?.["webp"] || destination?.images?.["png"]} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>{destination.description}</p>
      <p>
        <span>Avg. Distance</span>
        {destination.distance}
      </p>
      <p>
        <span>Est. Travel Time</span>
        {destination.travel}
      </p>
    </section>
  );
}
