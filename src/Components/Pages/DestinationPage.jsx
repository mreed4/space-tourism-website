import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext.jsx";

export default function DestinationPage() {
  const { getDestinationData, destination } = useContext(AppContext);
  const location = useLocation();
  const destinationId = location.state;

  useEffect(() => {
    getDestinationData(destinationId);
  }, [destinationId]);

  return (
    <>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <p>{destination.distance}</p>
      <p>{destination.travel}</p>
    </>
  );
}
