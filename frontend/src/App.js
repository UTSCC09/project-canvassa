import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateRoomPage, LandingPage } from "./pages";
import { getPaths } from "./shared/constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={getPaths.getLandingPage()} exact element={<LandingPage />} />
        <Route path={getPaths.getCreateRoomsPage()} exact element={<CreateRoomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
