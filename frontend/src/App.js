import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, AuthPage, RoomPage, CreateRoomPage } from "./pages";
import { getPaths } from "./shared/constants";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={getPaths.getLandingPage()}
            exact
            element={<LandingPage />}
          />
          <Route path={getPaths.getAuthPage()} element={<AuthPage />} />
          <Route
            path={getPaths.getCreateRoomsPage()}
            exact
            element={<CreateRoomPage />}
          />
          <Route
            path={getPaths.getRoomPage(":id")}
            exact
            element={<RoomPage />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
