import { useState } from "react";
import "./styles/Book.css";

const Book = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);

  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo.listPrice?.amount;

        if (thumbnail && amount) {
          return (
            <div
              key={item.id}
              className="book"
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <img src={thumbnail} alt="book" />
              <div className="button">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">{amount}</p>
              </div>
            </div>
          );
        }

        return null;
      })}
    </>
  );
};

export default Book;