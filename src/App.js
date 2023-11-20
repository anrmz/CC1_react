// App.js
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Todolist from "./component/Routess/Form.js";
import Home from "./component/Routess/home.js";
import Calc from "./component/Routess/Calc.js";
import Menu from "./component/Routess/Navbar.js";
import Slider from "./component/Routess/Slider.js";
import Api from "./component/Routess/api.js";
import { LangProvider } from "./component/mycontexte/Langcontext.js";
import Cicones from "./component/Routess/cicones.js";

function App() {
  return (
    <LangProvider>
      <div className="App">
        <Menu />

        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calc" element={<Calc />} />
          <Route path="/Todolist" element={<Todolist />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Multilangue" element={<Cicones />} />
          <Route
            path="*"
            element={
              <>
                <h1 className="error">
                  {" "}
                  4 0 4 <br />
                  Page not found
                </h1>
              </>
            }
          />
        </Routes>
      </div>
    </LangProvider>
  );
}

export default App;
