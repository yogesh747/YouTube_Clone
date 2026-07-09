import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import VideoPlayer from "./pages/VideoPlayer";
import Style from "./components/css/App.module.css";

const App = () => {
  const [collapse, setCollapse] = useState(false);

  return (
    <BrowserRouter>

      <Navbar
        collapse={collapse}
        setCollapse={setCollapse}
      />

      <Routes>

        <Route
          path="/"
          element={
            <div className={Style.layout}>
              <div className={Style.mainLayout}>
                <Sidebar collapse={collapse} />
                <MainBox />
              </div>
            </div>
          }
        />

        <Route
          path="/watch/:id"
          element={<VideoPlayer />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;