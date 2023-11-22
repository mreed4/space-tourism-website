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
        <img src={crewMember?.image} alt={crewMember?.name} />
      </div>
      <div className="content">
        <h3>{crewMember?.name}</h3>
        <p className="normal">{crewMember?.bio}</p>
        <div className="stats">
          <div>
            <h4>Role</h4>
            <span>{crewMember?.role}</span>
          </div>
          <div>
            <h4>Experience</h4>
            <span>{crewMember?.experience}</span>
          </div>
          <div>
            <h4>Speciality</h4>
            <span>{crewMember?.speciality}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
