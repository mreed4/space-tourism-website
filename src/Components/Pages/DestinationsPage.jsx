import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { AppContext } from "../../Contexts/AppContext.jsx";

function DestinationListItem({ destination }) {
  return (
    <li key={destination}>
      <NavLink to={destination} state={destination}>
        {destination}
      </NavLink>
    </li>
  );
}

DestinationListItem.propTypes = {
  destination: PropTypes.string.isRequired,
};

function DestinationsNav() {
  const { destinations } = useContext(AppContext);

  return (
    <nav>
      <ol className="destinations-nav-list">
        {destinations.map((destination) => (
          <DestinationListItem key={destination} destination={destination} />
        ))}
      </ol>
    </nav>
  );
}

export default function DestinationsPage() {
  const { getDestinations } = useContext(AppContext);

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <article className="destinations-page">
      <h2>01 Pick your destination</h2>
      <DestinationsNav />
      <Outlet /> {/* DestinationPage */}
    </article>
  );
}
