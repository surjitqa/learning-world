import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Page404 from "./component/Page404";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
      <div>App</div>
    </div>
  );
};

export default App;
