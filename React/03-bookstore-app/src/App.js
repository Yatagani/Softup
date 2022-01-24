import { useState } from "react";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Books from "./components/Books/Books";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
// import CartProvider from "./store/CartProvider";
import BookProvider from "./store/BookProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [wishlistIsShown, setWishlistIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showWishlistHandler = () => {
    setWishlistIsShown(true);
  };

  const hideWishlistHandler = () => {
    setWishlistIsShown(false);
  };

  return (
    <BookProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      {wishlistIsShown && <Wishlist onCloseWishlist={hideWishlistHandler} />}
      <Header onShowCart={showCartHandler} />
      <Navbar onShowWishlist={showWishlistHandler} />
      <Books />
    </BookProvider>
  );
}

export default App;
