import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Program from "./component/Bo'limlar/Link3/program";
import SportHaqida from "./component/Bo'limlar/Link2/SportHaqida";
import Fitnes from "./component/Bo'limlar/Link1/Fitnes";
import Asosiy from "./component/Bo'limlar/Home/Asosiy";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Asosiy />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Sporthaqida" element={<SportHaqida />} />
        <Route path="/Fitnes" element={<Fitnes />} />
      </Routes>
    </Router>
  );
};

export default App;
