import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppProvider({ children }) {
  const [destinations, setDestinations] = useState([]);
  const [crew, setCrew] = useState([]);
  const [technology, setTechnology] = useState([]);

  async function fetchData() {
    const response = await fetch("./src/assets/data/data.json");
    console.log(response);
    const data = await response.json();

    console.log(data);

    setDestinations(data.destinations);
    setCrew(data.crew);
    setTechnology(data.technology);
  }

  const value = {
    destinations,
    crew,
    technology,
    fetchData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
