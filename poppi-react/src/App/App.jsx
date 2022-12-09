import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from '../CharactersPage/CharactersPage';
import ContactPage from '../ContactPage/ContactPage'
import FanPage from "../FanPage/FanPage";
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../Navbar/Navbar';
import NotFound from "../NotFound/NotFound";
import ProductsPage from "../ProductsPage/ProductsPage";
import "./App.css";

export default function App() {

  return (
    <div className="App">
      <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/fan-page" element={<FanPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div className="footer">
        <p>© 2021 POPPI ♡ . All Rights Reserved.</p>
      </div>
      </div>
    </div>
  );
}
