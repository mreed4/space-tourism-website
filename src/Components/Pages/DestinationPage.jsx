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

  useEffect(() => {
    console.log(destination.images);
  }, [destination]);

  return (
    <section className={`destination ${destinationName}`}>
      <h1>{destination.name}</h1>
      <img src={destination.images["webp"] || destination.images["png"]} alt={destination.name} />
      <p>{destination.description}</p>
      <p>{destination.distance}</p>
      <p>{destination.travel}</p>
    </section>
  );
}
