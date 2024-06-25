import { Link } from "react-router-dom";
import "./styles/Book.css";
import "./styles/common.css";

const Book = ({ book }) => {
  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo.listPrice?.amount;

        if (thumbnail && amount) {
          return (
            <Link to={`/book/${item.id}`} key={item.id}>
              <div className="book">
                <img src={thumbnail} alt="book" />
                <div className="button">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">{amount}</p>
                </div>
              </div>
            </Link>
          );
        }

        return null;
      })}
    </>
  );
};

export default Book;
