import "./header.scss";
import { useState } from "react";

import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.svg";

import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideOrShow, setHideOrShow] = useState({});

  const handleManu = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setHideOrShow(() => {
        return {};
      });
    } else {
      setHideOrShow(() => {
        return { display: "flex" };
      });
    }
  };

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/">
          <img className="header__logo" src={logo} />
        </Link>
        {isOpen ? (
          <button className="close" onClick={handleManu}>
            X
          </button>
        ) : (
          <button onClick={handleManu} className="header__menu-btn">
            <img className="header__btn" src={menu} />
          </button>
        )}

        <div className="header__vision" style={hideOrShow}>
          <nav className="header__menu">
            <ul className="header__list">
              <Link to="studio">
                <li className="header__item text">THE STUDIO</li>
              </Link>
              <Link to="projects">
                <li className="header__item text">PROJECTS</li>
              </Link>
              <li className="header__item text">ARCHITECTURE</li>
              <li className="header__item text">BLOG</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
