import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./BookDetailPage.css";
import secondPage from "../image/secondPage.jpg";
import { shortenDescription } from "../Utils/utils";
import { fetchBookById } from "../Api/api";

const BookDetailPage = () => {
  const { id } = useParams();
  const [bookItem, setBookItem] = useState(null);

  useEffect(() => {
    fetchBookById(id)
      .then((data) => setBookItem(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!bookItem) {
    return <div>Loading...</div>;
  }

  const {
    volumeInfo: { title, authors, description, imageLinks, categories },
    saleInfo: { listPrice },
  } = bookItem;
  const thumbnail = imageLinks?.thumbnail || secondPage;
  const authorNames = authors?.join(", ");

  const shortDescription = shortenDescription(description);

  return (
    <div className="book-detail-container">
      <div className="book-detail-main">
        <div className="book-detail-image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="book-detail-info">
          <h2>{title}</h2>
          <h3>{authorNames}</h3>
          <p>{categories?.join(" / ")}</p>
          <div className="book-description">
            <p>{shortDescription}</p>
          </div>
          {listPrice && (
            <p>
              Price: {listPrice.amount} {listPrice.currencyCode}
            </p>
          )}
          <button className="back-link" onClick={() => window.history.back()}>
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
