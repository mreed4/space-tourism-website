import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppContext = createContext();

function AppProvider({ children }) {
  const [sections, setSections] = useState([]);

  const [destinations, setDestinations] = useState([]);
  const [crew, setCrew] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const [destination, setDestination] = useState({});
  const [crewMember, setCrewMember] = useState({});
  const [technology, setTechnology] = useState({});

  async function getSections() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setSections(Object.keys(data));
  }

  async function getDestinations() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setDestinations(data.destinations.map((destination) => destination.id));
  }

  async function getCrew() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setCrew(data.crew.map((crewMember) => crewMember.id));
  }

  async function getTechnologies() {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    setTechnologies(data.technology.map((technology) => technology.id));
  }

  async function getDestinationData(destinationName) {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    const destination = data.destinations.find((destination) => destination.id === destinationName);

    setDestination(destination);
  }

  async function getCrewMemberData(crewMemberID) {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    const crewMember = data.crew.find((crewMember) => crewMember.id === crewMemberID);

    setCrewMember(crewMember);
  }

  async function getTechnologyData(technologyID) {
    const response = await fetch("/src/assets/data/data.json");
    const data = await response.json();

    const technology = data.technology.find((technology) => technology.id === technologyID);

    setTechnology(technology);
  }

  const value = {
    destinations,
    crew,
    technologies,
    sections,
    destination,
    crewMember,
    technology,
    getDestinations,
    getCrew,
    getTechnologies,
    getSections,
    getDestinationData,
    getCrewMemberData,
    getTechnologyData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
