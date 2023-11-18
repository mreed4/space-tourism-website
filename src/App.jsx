import { useContext, useEffect } from "react";
import { AppContext } from "./Contexts/AppContext.jsx";

import "./App.css";

function App() {
  const { fetchData, destinations, crew, technology } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Space Tourism</h1>
      <h2>Take a trip to Mars</h2>
      <h3>Destinations</h3>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>
      <h3>Crew</h3>
      <ul>
        {crew.map((crewMember) => (
          <li key={crewMember.id}>{crewMember.name}</li>
        ))}
      </ul>
      <h3>Technology</h3>
      <ul>
        {technology.map((tech) => (
          <li key={tech.id}>{tech.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
