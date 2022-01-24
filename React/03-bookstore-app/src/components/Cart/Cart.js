import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
// import CartContext from "../../store/cart-context";
import BookContext from "../../store/book-context";

const Cart = (props) => {
  const bookCtx = useContext(BookContext);

  const totalAmount = `ALL ${bookCtx.cart.totalAmount}`;
  const hasItems = bookCtx.cart.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    bookCtx.cart.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    bookCtx.cart.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {bookCtx.cart.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
