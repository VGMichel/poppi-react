import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from '../CharactersPage/CharactersPage';
import ContactPage from '../ContactPage/ContactPage'
import LandingPage from '../LandingPage/LandingPage';
import Navbar from '../Navbar/Navbar';
import NotFound from "../NotFound/NotFound";
import "./App.css";

export default function App() {
  const [active, setActive] = useState(true)

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <div className="App">
      <div className="main">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<CharactersPage active={active} handleChangeActive={handleChangeActive} />} />
          <Route path="/contact" element={<ContactPage />} />
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
