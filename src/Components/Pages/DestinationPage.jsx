import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Contexts/AppContext.jsx";

export default function DestinationPage({ destinationId }) {
  const { destination, getDestinationData } = useContext(AppContext);

  useEffect(() => {
    getDestinationData(destinationId);
  }, [destinationId]);

  return (
    <>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <p>{destination.location}</p>
      <p>{destination.price}</p>
    </>
  );
}

DestinationPage.defaultProps = {
  destinationId: "moon",
};

DestinationPage.propTypes = {
  destinationId: PropTypes.string,
};
