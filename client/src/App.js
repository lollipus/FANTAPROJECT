import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import "./App.css";
import Portieri from "./components/Portieri/Portieri";
import Difensori from "./components/Difensori/Difensori";
import Centrocampisti from "./components/Centrocampisti/Centrocampisti";
import Attaccanti from "./components/Attaccanti/Attaccanti";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/portieri" element={Portieri()} />
        <Route path="/difensori" element={Difensori()} />
        <Route path="/centrocampisti" element={Centrocampisti()} />
        <Route path="/attaccanti" element={Attaccanti()} />
      </Routes>
    </div>
  );
}

export default App;
