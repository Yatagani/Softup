import { useContext } from "react";

import Modal from "../UI/Modal";
import WishlistItem from "../Wishlist/WishlistItem";
import classes from "./Wishlist.module.css";
import BookContext from "../../store/book-context";

const Wishlist = (props) => {
  const bookCtx = useContext(BookContext);
  console.log(bookCtx);

  // const isFavorite = bookCtx.wishlist.isFavorite;
  // const hasItems = bookCtx.items.length > 0;

  const wishlistItemRemoveHandler = (id) => {
    bookCtx.wishlist.removeItem(id);
  };

  const wishlistItemAddHandler = (item) => {
    bookCtx.wishlist.addItem(item);
  };

  const wishlistItems = (
    <ul className={classes["wishlist-items"]}>
      {bookCtx.wishlist.items.map((item) => (
        <WishlistItem
          key={item.id}
          title={item.title}
          image={item.image}
          onRemove={() => wishlistItemRemoveHandler(item.id)}
          onAdd={() => wishlistItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onCloseWishlist}>
      {wishlistItems}
      <button className={classes.button} onClick={props.onCloseWishlist}>
        Close
      </button>
    </Modal>
  );
};

export default Wishlist;
