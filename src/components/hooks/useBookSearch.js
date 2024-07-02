import { useState } from "react";
import axios from "axios";

const RESULTS_SEARCH = "&maxResults=30";
const API_KEY = "AIzaSyCMVLJ9y0VCp8KatSP1UY9rNGoc3zuDVFQ" + RESULTS_SEARCH;

const useBookSearch = (search, category, sort) => {
  const [bookData, setBookData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBook = (newSearch = true) => {
    if (loading) return;

    setLoading(true);
    setError(null);

    const categoryQuery = category !== "all" ? `+subject:${category}` : "";
    const currentStartIndex = newSearch ? 0 : startIndex;

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}${categoryQuery}&orderBy=${sort}&startIndex=${currentStartIndex}&key=${API_KEY}`
      )
      .then((res) => {
        setBookData((prevData) =>
          newSearch ? res.data.items : [...prevData, ...res.data.items]
        );
        setStartIndex(currentStartIndex + 30);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return { bookData, searchBook, loading, error };
};

export default useBookSearch;
