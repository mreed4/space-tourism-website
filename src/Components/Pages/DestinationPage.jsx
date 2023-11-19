import { useContext, useEffect } from "react";
import { AppContext } from "../../Contexts/AppContext.jsx";
import { useLocation } from "react-router-dom";

export default function DestinationPage() {
  const { getDestinationData, destination } = useContext(AppContext);
  const location = useLocation();
  const destinationName = location.state;

  useEffect(() => {
    console.log(destinationName);
  }, []);

  useEffect(() => {
    getDestinationData(destinationName);
  }, [destinationName]);

  return (
    <section className={`destination ${destinationName}`}>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <p>{destination.distance}</p>
      <p>{destination.travel}</p>
    </section>
  );
}
