import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppProvider({ children }) {
  const [destinations, setDestinations] = useState([]);
  const [crew, setCrew] = useState([]);
  const [technology, setTechnology] = useState([]);
  const [sections, setSections] = useState([]);
  const [destination, setDestination] = useState({});

  async function getDestinations() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setDestinations(data.destinations.map((destination) => destination.id));
  }

  async function getCrew() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setCrew(data.crew);
  }

  async function getTechnology() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setTechnology(data.technology);
  }

  async function getSections() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setSections(Object.keys(data));
  }

  async function getDestinationData(destinationName) {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    const destination = data.destinations.find((destination) => destination.id === destinationName);

    setDestination(destination);
  }

  const value = {
    destinations,
    crew,
    technology,
    sections,
    destination,
    getDestinations,
    getCrew,
    getTechnology,
    getSections,
    getDestinationData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
