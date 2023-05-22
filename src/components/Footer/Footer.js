import "./footer.scss";

import logo from "../../assets/images/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo-box">
          <img className="footer__logo" src={logo} />
          <p className="footer__text text">
            Take a look at how we designed this housesimply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old.
          </p>
        </div>

        <div className="footer__info">
          <nav className="footer__menu">
            <ul className="footer__list">
              <li className="footer__item text">THE STUDIO</li>
              <li className="footer__item text">PROJECTS</li>
              <li className="footer__item text">ARCHITECTURE</li>
              <li className="footer__item text">BLOG</li>
              <li className="footer__item text">CONTACT</li>
            </ul>
          </nav>
          <div className="footer__contacts">
            <div className="footer__contacts-box">
              <h1 className="footer__title title">Visit</h1>
              <p className="footer__info-text text">
                Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184
              </p>
            </div>
            <div className="footer__contacts-box">
              <h1 className="footer__title title">WhatsApp</h1>
              <p className="footer__info-text text">+88 017-6153-1774</p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__rights text">
        © Copyright 2022 Email:{" "}
        <span className="footer__orange">Asibulasik@gmail.com</span>
      </p>
    </footer>
  );
}

export default Footer;
