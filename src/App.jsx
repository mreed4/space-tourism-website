import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AppContext } from "./Contexts/AppContext.jsx";

import "./App.css";

function MainNav() {
  const { sections } = useContext(AppContext);
  return (
    <nav>
      <ol className="main-nav-list">
        <li key="home" value="0">
          <NavLink to="/">Home</NavLink>
        </li>
        {sections.map((section, i) => (
          <li key={section} value={i + 1}>
            <NavLink to={section}>{section}</NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  const { getSections } = useContext(AppContext);

  useEffect(() => {
    getSections();
  }, []);

  return (
    <>
      <header>
        <h1>
          <img src="/img/shared/logo.svg" alt="Space Tourism" />
        </h1>
        <hr />
        <MainNav />
      </header>
      <main>
        <Outlet /> {/* Outlet: CrewPage, DestinationsPage, StartPage, TechnologiesPage */}
      </main>
    </>
  );
}

export default App;
