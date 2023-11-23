import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AppContext } from "../../Contexts/AppContext.jsx";

export default function CrewMemberPage() {
  const { getCrewMemberData, crewMember } = useContext(AppContext);
  const location = useLocation();
  const crewMemberID = location.state;

  useEffect(() => {
    getCrewMemberData(crewMemberID);
  }, [crewMemberID]);

  return (
    <article className={`crew-member-page ${crewMemberID}`}>
      <div className="portrait-wrapper">
        <img src={crewMember?.images?.["webp"] || crewMember?.images?.["png"]} alt={crewMember?.name} />
      </div>
      <div className="content">
        <span className="pseudo-header">{crewMember?.role}</span>
        <h3>{crewMember?.name}</h3>
        <p className="normal">{crewMember?.bio}</p>
      </div>
    </article>
  );
}
