import React from 'react';
import { NavLink } from "react-router-dom";
import cn from 'classnames';


type Props = {
  type: string,
};

const prepareLink = (type: string) => {
  switch (type) {
    case 'fav':
      return ['/fav', 'images/headerImages/Favourites.svg'];
    
    case 'burger-menu':
      return ['/burger-menu', 'images/headerImages/burgerMenu.svg'];
    
    case 'close':
      return ['/close', 'images/headerImages/Close.svg'];
  
    default:
      return ['/cart', 'images/headerImages/shoppingCart.svg'];
  }
}

export const HeaderButton: React.FC<Props> = ({ type }) => {
  const linkData = prepareLink(type);

  return (
    <NavLink to={linkData[0]} className={({ isActive }) => cn(
      'header__button',
      {'header__button--active': isActive },
      {'header__button--burger-menu': type === 'burger-menu' },
      {'header__button--fav': type === 'fav' },
      {'header__button--cart': type === 'cart' },
    )}>
      <img src={linkData[1]} alt='button' className="header__button--image"/>
    </NavLink>
  )
}