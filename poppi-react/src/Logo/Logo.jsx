import { Link } from "react-router-dom";
import poppLogo from "../assets/logo.svg";
import './Logo.css'

export default function Logo() {
  return (
  <div className="logo">
    <Link to="/">
        <img class="logo" src={poppLogo} />
    </Link>
  </div>
  )
}