import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AppContext } from "./Contexts/AppContext.jsx";

import "./App.css";

function App() {
  const { getSections, sections } = useContext(AppContext);

  useEffect(() => {
    getSections();
  }, []);

  return (
    <>
      <ol>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {sections.map((section) => (
          <li key={section}>
            <NavLink to={section}>{section}</NavLink>
          </li>
        ))}
      </ol>
      <Outlet /> {/* CrewPage, DestinationPage, StartPage, TechnologyPage */}
    </>
  );
}

export default App;
