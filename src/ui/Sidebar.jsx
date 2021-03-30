import React from "react";
import home from "../img/SVG/home.svg";
import aircraft from "../img/SVG/aircraft-take-off.svg";
import key from "../img/SVG/key.svg";
import map from "../img/SVG/map.svg";

const Sidebar = () => (
  <>
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#test" className="side-nav__link">
            <img src={home} className="side-nav__icon" alt="Home icon" />
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#test" className="side-nav__link">
            <img src={aircraft} className="side-nav__icon" alt="Flight icon" />
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#test" className="side-nav__link">
            <img src={key} className="side-nav__icon" alt="Rental icon" />
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#test" className="side-nav__link">
            <img src={map} className="side-nav__icon" alt="Tours icon" />
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div class="legal">&copy; 2017 by trillo. All rights reserved.</div>
    </nav>
  </>
);

export default Sidebar;
