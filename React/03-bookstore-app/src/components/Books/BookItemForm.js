import { useRef, useState } from "react";

import classes from "./BookItemForm.module.css";

const BookItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const addItemToWishlistHandler = (event) => {
    event.preventDefault();

    isFavorite ? setIsFavorite(false) : setIsFavorite(true);
    
    props.onAddToWishlist();
  };

  return (
    <form className={classes.container}>
      <input
        ref={amountInputRef}
        className={classes.input}
        id={"amount_" + props.id}
        type="number"
        defaultValue={1}
        min={1}
      ></input>
      <button className={classes.button} onClick={submitHandler}>
        Add to Cart
      </button>
      <button className={classes.button} onClick={addItemToWishlistHandler}>
        {!isFavorite ? "Like" : "Unlike"}
      </button>
    </form>
  );
};

export default BookItemForm;
