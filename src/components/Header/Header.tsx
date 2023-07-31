import React from 'react';
import './Header.scss';

import { HeaderButton } from '../HeaderButton';
import { Link } from 'react-router-dom';
import { PageNavLink } from '../PageNavLink';

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header__top">
          <Link to="./" className="header__logo">
            <img
              className="header__logo--image"
              src="images/headerImages/logo.svg"
              alt="NiceGadgets logo" />
          </Link>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <PageNavLink to="/" text="Home" />
              </li>

              <li className="nav__item">
                <PageNavLink to="/Phones" text="Phones" />
              </li>

              <li className="nav__item">
                <PageNavLink to="/Tablets" text="Tablets" />
              </li>

              <li className="nav__item">
                <PageNavLink to="/Accessories" text="Accessories" />
              </li>
            </ul>
          </nav>

          {/* <div className="header__menu-opener"></div> */}

          <div className="header__icons">
            {/*  TODO: discuss with teamLead about usage of router */}
            <HeaderButton type='fav' />
            <HeaderButton type='cart' />
            <HeaderButton type='burger-menu' />
          </div>  
        </div>
      </header>
    </>
  );
};