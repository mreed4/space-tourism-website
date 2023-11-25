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
      <h3>{technology.name}</h3>
    </article>
  );
}
