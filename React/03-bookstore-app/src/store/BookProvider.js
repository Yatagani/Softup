import { useState, useReducer } from "react";

import BookContext from "./book-context";

// const [cartContext, setCartContext] = useState("");
// const [wishlistContext, setWishlistContext] = useState("");

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const defaultWishlistState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const wishlistReducer = (state, action) => {
  if (action.type === "FAV") {
    const existingWishlistItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingWishlistItem = state.items[existingWishlistItemIndex];

    let updatedItems;

    if (existingWishlistItem) {
      const updatedItem = {
        ...existingWishlistItem,
        // isFavorite = true,
      };
      updatedItems = [...state.items];
      updatedItems[existingWishlistItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    console.log("Item added to wishlist", updatedItems);
    return {
      items: updatedItems,
    };
  } else if (action.type === "UNFAV") {
    const updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
    };
  }

  return defaultWishlistState;
};

const BookProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const [wishlistState, dispatchWishlistAction] = useReducer(
    wishlistReducer,
    defaultWishlistState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const addItemToWishlistHandler = (item) => {
    dispatchWishlistAction({ type: "FAV", item: item });
  };

  const removeItemFromWishlistHandler = (id) => {
    dispatchWishlistAction({ type: "UNFAV", id: id });
  };

  const bookContext = {
    cart: {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
    },
    wishlist: {
      items: wishlistState.items,
      addItem: addItemToWishlistHandler,
      removeItem: removeItemFromWishlistHandler,
    },
  };

  console.log("Book Context", bookContext.wishlist.items);

  return (
    <BookContext.Provider value={bookContext}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
