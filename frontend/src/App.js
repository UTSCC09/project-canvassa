import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, PublicRoomsPage, CanvasPage } from "./pages";
import { PATHS } from "./shared/constants";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={PATHS.CANVAS_PAGE}
          exact
          element={
            <RecoilRoot>
              <CanvasPage />
            </RecoilRoot>
          }
        />
        <Route path={PATHS.LANDING_PAGE} exact element={<LandingPage />} />
        <Route
          path={PATHS.PUBLIC_ROOMS_PAGE}
          exact
          element={<PublicRoomsPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
