import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import poppLogo from "../assets/logo.svg";
import CharactersPage from '../CharactersPage/CharactersPage';
import ContactPage from '../ContactPage/ContactPage'
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../Navbar/Navbar';
import NotFound from "../NotFound/NotFound";
import "./App.css";

export default function App() {
  const [toggleHome, setToggleHome] = useState(true)
  const [toggleCharacter, setToggleCharacter] = useState(false)
  const [toggleContact, setToggleContact] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
