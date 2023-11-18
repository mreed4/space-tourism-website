import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Contexts/AppContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import DestinationPage from "./Components/Pages/DestinationPage.jsx";
import CrewPage from "./Components/Pages/CrewPage.jsx";
import StartPage from "./Components/Pages/StartPage.jsx";
import TechnologyPage from "./Components/Pages/TechnologyPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="" element={<StartPage />} />
            <Route path="destinations" element={<DestinationPage />}>
              <Route path=":destinationId" />
            </Route>
            <Route path="crew" element={<CrewPage />} />
            <Route path="technology" element={<TechnologyPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  </React.StrictMode>
);
