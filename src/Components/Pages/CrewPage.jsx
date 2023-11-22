import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { AppContext } from "../../Contexts/AppContext.jsx";

function CrewListItem({ crewMemberID }) {
  return (
    <li key={crewMemberID}>
      <NavLink to={crewMemberID} state={crewMemberID}></NavLink>
    </li>
  );
}

CrewListItem.propTypes = {
  crewMemberID: PropTypes.string.isRequired,
};

function CrewNav() {
  const { crew } = useContext(AppContext);

  return (
    <nav>
      <ol className="crew-nav-list">
        {crew.map((crewMember) => (
          <CrewListItem key={crewMember} crewMemberID={crewMember} />
        ))}
      </ol>
    </nav>
  );
}

export default function CrewPage() {
  const { getCrew } = useContext(AppContext);

  useEffect(() => {
    getCrew();
  }, []);

  return (
    <section className="crew-page">
      <h2>
        <span className="section-num">02</span> Meet your crew
      </h2>
      <Outlet /> {/* CrewMemberPage */}
      <CrewNav />
    </section>
  );
}
