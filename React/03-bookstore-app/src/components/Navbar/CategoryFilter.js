import React from "react";
import classes from "./CategoryFilter.module.css";

const CategoryFilter = (props) => {
  const changeCategoryHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <select
      className={classes.select}
      value={props.selected}
      onChange={changeCategoryHandler}
    >
      <option value="Language">Language</option>
      <option value="English">English</option>
      <option value="French">French</option>
      <option value="Italian">Italian</option>
      <option value="German">German</option>
      <option value="Spanish">Spanish</option>
    </select>
  );
};

export default CategoryFilter;
