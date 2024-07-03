import { Link } from "react-router-dom";
import "./Book.css";
import "../styles/common.css";
import defaultImage from "../image/defaultImage.jpg";

const Book = ({ books }) => {
  return (
    <>
      {books.map((item) => {
        const {
          id,
          volumeInfo: { imageLinks, title, authors },
          saleInfo: { listPrice },
        } = item;

        const thumbnail = imageLinks?.smallThumbnail || defaultImage;
        const amount = listPrice?.amount;
        const formattedAuthors = authors
          ? authors.slice(0, 3).join(", ")
          : "Unknown author";

        return (
          <Link to={`/book/${id}`} key={id}>
            <div className="book">
              {thumbnail && <img src={thumbnail} alt="book" />}
              <div className="button">
                <h3 className="title">{title}</h3>
                <h4 className="authors">{formattedAuthors}</h4>
                {amount && <p className="amount">{amount}</p>}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Book;
