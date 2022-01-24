import { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import WishlistNavigation from "./WishlistNavigation";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [selectedValue, setSelectedValue] = useState("Language");

  const categoryChangeHandler = (selectedValue) => {
    setSelectedValue(selectedValue);
  };

  console.log(`Language ${selectedValue} chosen.`);

  return (
    <ul className={classes.navigation}>
      <CategoryFilter
        selected={selectedValue}
        onChangeFilter={categoryChangeHandler}
      />
      <WishlistNavigation onClick={props.onShowWishlist} />
    </ul>
  );
};

export default Navbar;
