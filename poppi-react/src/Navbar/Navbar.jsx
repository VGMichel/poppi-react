import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import favicon from '../assets/official-favicon-2021-03.png'
import "./Navbar.css";

export default function Navbar() {
  return (
  <nav className="navbar">
    <Logo />
    <ul className="nav-items">
      <li className="item is-active">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/characters">Characters</Link>
      </li>
      <li className="item">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="item">
        <Link to="/fan-page">
          <img src={favicon} alt="heart shaped logo" className="heart-logo" />
        </Link>
      </li>
    </ul>
  </nav>
  )
}
