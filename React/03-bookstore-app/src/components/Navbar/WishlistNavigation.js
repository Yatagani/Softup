import React from "react";
import classes from './WishlistNavigation.module.css'

const WishlistNavigation = (props) => {
  return <li className={classes.container} onClick={props.onClick}>Wishlist</li>;
};

export default WishlistNavigation;
