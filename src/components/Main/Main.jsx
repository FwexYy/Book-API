import { useState } from "react";
import useBookSearch from "../hooks/useBookSearch";
import Book from "../Book/Book";
import "./Main.css";
import "../styles/common.css";
import { CATEGORIES, SORT_OPTIONS } from "../Constants/constants";

const Main = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(CATEGORIES.ALL);
  const [sort, setSort] = useState(SORT_OPTIONS.RELEVANCE);
  const { bookData, searchBook, loading, error } = useBookSearch(
    search,
    category,
    sort
  );

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      searchBook(true);
    }
  };

  const handleSearchClick = () => {
    searchBook(true);
  };

  const handleLoadMoreClick = () => {
    searchBook(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="search">
            <input
              type="text"
              placeholder="Enter"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="btn-search" onClick={handleSearchClick}>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="filters">
            <label className="category">Category: </label>
            <select
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              {Object.keys(CATEGORIES).map((key) => (
                <option key={key} value={CATEGORIES[key]}>
                  {key.charAt(0) + key.slice(1).toLowerCase()}{" "}
                </option>
              ))}
            </select>
            <label className="sort">Sort by: </label>
            <select id="sort" value={sort} onChange={handleSortChange}>
              {Object.keys(SORT_OPTIONS).map((key) => (
                <option key={key} value={SORT_OPTIONS[key]}>
                  {key.charAt(0) + key.slice(1).toLowerCase()}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Book books={bookData} />
        {bookData.length > 0 && !loading && (
          <button className="btn-load-more" onClick={handleLoadMoreClick}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default Main;
