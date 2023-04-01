import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import favicon from '../assets/official-favicon-2021-03.png'
import "./Navbar.css";

export default function Navbar() {

  window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.nav-items .item.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is-active');
}


  return (
  <nav className="navbar">
    <Logo />
    <i class="fa-solid fa-bars"></i>
    <ul className="nav-items">
      <li className="item is-active">
        <Link to="/" data-switcher data-tab="1">Home</Link>
      </li>
      <li className="item">
        <Link to="/products" data-switcher data-tab="2">Products</Link>
      </li>
      <li className="item">
        <Link to="/characters" data-switcher data-tab="3">Characters</Link>
      </li>
      <li className="item">
        <Link to="/contact" data-switcher data-tab="4">Contact</Link>
      </li>
      <li className="item">
        <Link to="/fan-page" data-switcher data-tab="5">
          <img src={favicon} alt="heart shaped logo" className="heart-logo" />
        </Link>
      </li>
    </ul>
  </nav>
  )
}
