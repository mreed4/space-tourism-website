import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext.jsx";

export default function DestinationsPage() {
  const { destinations, getDestinations } = useContext(AppContext);

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <article className="destinations">
      <ol>
        {destinations.map((destination) => (
          <li key={destination}>
            <NavLink to={destination} state={destination}>
              {destination}
            </NavLink>
          </li>
        ))}
      </ol>
      <Outlet /> {/* DestinationPage */}
    </article>
  );
}
