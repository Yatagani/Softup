import { useContext, useEffect } from "react";

import CartIcon from "../Cart/CartIcon";
// import CartContext from "../../store/cart-context";
import BookContext from "../../store/book-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const bookCtx = useContext(BookContext);

  // console.log(bookCtx.cart);

  const { items } = bookCtx.cart;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
  }, [items]);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
