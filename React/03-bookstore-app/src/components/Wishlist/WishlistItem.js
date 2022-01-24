import classes from "./WishlistItem.module.css";

const WishlistItem = (props) => {
  return (
    <li className={classes["wishlist-item"]}>
      <div className={classes.summary}>
        <img src={props.image} alt="random_image"></img>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>X</button>
      </div>
    </li>
  );
};

export default WishlistItem;
