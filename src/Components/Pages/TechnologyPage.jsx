import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AppContext } from "../../Contexts/AppContext.jsx";

export default function TechnologyPage() {
  const { getTechnologyData, technology } = useContext(AppContext);
  const location = useLocation();
  const technologyID = location.state;

  useEffect(() => {
    getTechnologyData(technologyID);
  }, [technologyID]);

  return (
    <article className={`technology-page ${technologyID}`}>
      <div className="content">
        <span className="pseudo-header">The Terminology ...</span>
        <h3>{technology.name}</h3>
        <p className="normal">{technology?.description}</p>
      </div>
      <div className="image-wrapper">
        <img src={technology?.images?.["portrait"]} alt={technology?.name} className="desktop" />
        <img src={technology?.images?.["landscape"]} alt={technology?.name} className="mobile tablet" />
      </div>
    </article>
  );
}
