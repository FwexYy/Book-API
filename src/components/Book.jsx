import { Link } from "react-router-dom";
import "./styles/Book.css";
import "./styles/common.css";

const Book = ({ book }) => {
  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo.listPrice?.amount;
        const authors = item.volumeInfo.authors?.join(", ");

        return (
          <Link to={`/book/${item.id}`} key={item.id}>
            <div className="book">
              {thumbnail && <img src={thumbnail} alt="book" />}
              <div className="button">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <h4 className="authors">{authors}</h4>
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
