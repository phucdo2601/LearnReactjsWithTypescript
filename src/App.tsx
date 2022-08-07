import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormulaDynamicForm from "./components/FormulaDynamicForm";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateFormulaDynamicForm from "./components/UpdateFormulaDynamicForm";
import UpdateFormulaDynamicForm2 from "./components/UpdateFormulaDynamicForm2";
import FormulaDynamicForm2 from "./components/FormulaDynamicForm2";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComp />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormulaDynamicForm />} />
          <Route path="/home" element={<FormulaDynamicForm />} />
          <Route path="/formulaDynamicForm2" element={<FormulaDynamicForm2 />} />
          <Route path='/updateFormula' element={< UpdateFormulaDynamicForm />} />
          <Route path='/updateFormula2' element={< UpdateFormulaDynamicForm2 />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
