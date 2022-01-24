import { useContext, useState } from "react";

import BookItemForm from "./BookItemForm";
import classes from "./BookItem.module.css";
// import CartContext from "../../store/cart-context";
import BookContext from "../../store/book-context";

const BookItem = (props) => {
  const imagePath = require(`../../assets/${props.image}`);
  const bookCtx = useContext(BookContext);
  const price = `ALL ${props.price}`;
  const [isPressed, setisPressed] = useState(false);

  const addToCartHandler = (amount) => {
    bookCtx.cart.addItem({
      id: props.id,
      title: props.title,
      amount: amount,
      price: props.price,
    });
  };

  const addToWishlistHandler = () => {
    console.log(isPressed);

    if (!isPressed) {
      bookCtx.wishlist.addItem({
        id: props.id,
        title: props.title,
      });
      setisPressed(true);
    } else {
      bookCtx.wishlist.removeItem(props.id);
      setisPressed(false);
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <img className={classes.image} src={imagePath} alt="random_img"></img>
        <h3>{props.title}</h3>
        <div className={classes.author}>{props.author}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <BookItemForm
        id={props.id}
        onAddToCart={addToCartHandler}
        onAddToWishlist={addToWishlistHandler}
      />
    </div>
  );
};

export default BookItem;
