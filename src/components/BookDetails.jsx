import "./styles/BookDetails.css";
import "./styles/common.css";

const BookDetails = ({ show, item, onClose }) => {
  if (!show) return null;

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;

  return (
    <div className={`overlay ${show ? "show" : ""}`}>
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="inner-box">
          <img src={thumbnail} alt="book" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors?.join(", ")}</h3>
            <br />
            <h4>
              {item.volumeInfo.publisher}{" "}
              <span>{item.volumeInfo.publishedDate}</span>
            </h4>
          </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
      </div>
    </div>
  );
};

export default BookDetails;
