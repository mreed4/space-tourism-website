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
    <article className={`destination-page ${destinationName}`}>
      <div className="planet-wrapper">
        <img src={destination?.images?.["webp"] || destination?.images?.["png"]} alt={destination.name} />
      </div>
      <div className="content">
        <h3>{destination.name}</h3>
        <p className="normal">{destination.description}</p>
        <div className="stats">
          <div>
            <h4>Avg. Distance</h4>
            <span>{destination.distance}</span>
          </div>
          <div>
            <h4>Est. Travel Time</h4>
            <span>{destination.travel}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
