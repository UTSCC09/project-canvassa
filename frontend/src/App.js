import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, AuthPage, RoomPage } from "./pages";
import { getPaths } from "./shared/constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={getPaths.getLandingPage()}
          exact
          element={<LandingPage />}
        />
        <Route path={getPaths.getAuthPage()} exact element={<AuthPage />} />
        <Route
          path={getPaths.getRoomPage(":id")}
          exact
          element={<RoomPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
