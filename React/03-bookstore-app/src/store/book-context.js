import React from "react";

const BookContext = React.createContext({
  cart: {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
  },
  wishlist: {
    items: [],
    isFavorite: false,
    addItem: (item) => {},
    removeItem: (id) => {},
  },
});

export default BookContext;
