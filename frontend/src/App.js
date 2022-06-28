import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages";
import { PATHS } from "./shared/constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.LANDING_PAGE} exact element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
