import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  AuthPage,
  RoomPage,
  CreateRoomPage,
  PublicRoomsPage,
  CanvasPage,
} from "./pages";
import { getPaths } from "./shared/constants";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path={getPaths.getCanvasPage()}
            exact
            element={
              <RecoilRoot>
                <CanvasPage />
              </RecoilRoot>
            }
          />
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
