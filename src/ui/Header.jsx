import React from "react";
import hotel1 from "../img/logo.png";
import aidan from "../img/aidan.jpg";
import magnifying from "../img/SVG/magnifying-glass.svg";
import bookmark from "../img/SVG/bookmark.svg";
import chat from "../img/SVG/chat.svg";

const Header = () => (
  <>
    <header className="header">
      {/* ICON + FORM */}
      <img src={hotel1} alt="trillo logo" className="logo" />
      <form action="#" className="search" placeholder="Search hotels">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <img src={magnifying} alt="trillo logo" />
        </button>
      </form>

      {/* NAV ICONS */}
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <img src={bookmark} className="user-nav__icon" alt="bookmark icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <img src={chat} className="user-nav__icon" alt="bookmark icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__user">
          <img
            src={aidan}
            className="user-nav__user-photo"
            alt="bookmark icon"
          />
          <span className="user-nav__user-name">Aidan</span>
        </div>
      </nav>
    </header>
  </>
);

export default Header;
