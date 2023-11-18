import PropTypes from "prop-types";

export default function DestinationPage({ destination }) {
  return (
    <>
      <h1>{destination.name}</h1>
      <p>{destination.description}</p>
      <p>{destination.location}</p>
      <p>{destination.price}</p>
    </>
  );
}

DestinationPage.propTypes = {
  destination: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
  }),
};
