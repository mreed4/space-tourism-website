import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AppContext } from "../../Contexts/AppContext.jsx";

export default function DestinationsPage() {
  const { destinations, getDestinations } = useContext(AppContext);

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <>
      <ol>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <Link to={destination.id} state={destination.id}>
              {destination.name}
            </Link>
          </li>
        ))}
      </ol>
      <Outlet />
    </>
  );
}
