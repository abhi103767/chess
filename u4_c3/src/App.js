// import "./App.css";

import { Route, Routes } from "react-router-dom";
import { About } from "./Components/pages/About";
import Books from "./Components/pages/Books";
import { Home } from "./Components/pages/Home";
import { Login } from "./Components/pages/Login";
import { Navbar } from "./Components/pages/Navbar";
import { SingleBook } from "./Components/pages/SingleBook";
import Mainroutes from "./Components/Routes/MainRoutes";
import { RequiredAuth } from "./Components/Routes/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Mainroutes />


    </div>
  );
}
export default App;

