import { Outlet, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { AppContext } from "../../Contexts/AppContext.jsx";

function TechnologyListItem({ technology, number }) {
  return (
    <li key={technology}>
      <NavLink to={technology} state={technology}>
        {number}
      </NavLink>
    </li>
  );
}

TechnologyListItem.propTypes = {
  technology: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

function TechnologiesNav() {
  const { technologies } = useContext(AppContext);

  return (
    <nav>
      <ol className="technologies-nav-list">
        {technologies.map((technology, i) => (
          <TechnologyListItem key={technology} technology={technology} number={i + 1} />
        ))}
      </ol>
    </nav>
  );
}

export default function TechnologiesPage() {
  const { getTechnologies } = useContext(AppContext);

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <section className="technologies-page">
      <h2>
        <span className="section-num">03</span> Space Launch 101
      </h2>
      <div className="content-wrapper">
        <TechnologiesNav />
        <Outlet /> {/* TechnologyPage */}
      </div>
    </section>
  );
}
