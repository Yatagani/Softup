import jsonData from "../../assets/jsonData.json";
import BookItem from "./BookItem";
import classes from "./Books.module.css";

const booksList = jsonData.map((book) => (
  <BookItem
  key={book.link}
  id={book.link}
  title={book.title}
  author={book.author}
  price={book.pages}
  image={book.imageLink}
  category={book.language}
  />
  ));

const Books = () => {
  return <div className={classes.booksContainer}>{booksList}</div>;
};

export default Books;
