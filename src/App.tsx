import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import { Route, Routes } from "react-router-dom";
import HomeComp from "./components/HomeComp";
import ParseExcelComp from "./components/ParseExcelComp";
import ExportExcelComp from "./components/exportExcel/ExportExcelComp";
import ReadExcelComp from "./components/readExcel/ReadExcelComp";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <HeaderComp />

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/parse-excel" element={<ParseExcelComp />} />
        <Route path="/read-excel" element={<ReadExcelComp />} />
        <Route path="/export-excel" element={<ExportExcelComp />} />
      </Routes>
    </>
  );
}

export default App;
