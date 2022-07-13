import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, AuthPage } from "./pages";
import { PATHS } from "./shared/constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.LANDING_PAGE} exact element={<LandingPage />} />
        <Route path={PATHS.AUTH_PAGE} exact element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;
