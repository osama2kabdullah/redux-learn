import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Nav";
import ErrorPage from "../pages/404";
import AddBook from "../pages/AddBook";
import Home from "../pages/Home";
import ShowBooks from "../pages/ShowBooks";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showbooks" element={<ShowBooks />} />
        <Route path="/addbooks" element={<AddBook />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Index;
