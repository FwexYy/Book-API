import { useState } from "react";
import axios from "axios";

const RESULTS_SEARCH = "&maxResults=30";
const API_KEY = "AIzaSyCMVLJ9y0VCp8KatSP1UY9rNGoc3zuDVFQ" + RESULTS_SEARCH;

const useBookSearch = (search, category, sort) => {
  const [bookData, setBookData] = useState([]);

  const searchBook = () => {
    const categoryQuery = category !== "all" ? `+subject:${category}` : "";
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}${categoryQuery}&orderBy=${sort}&key=${API_KEY}`
      )
      .then((res) => setBookData(res.data.items || []))
      .catch((err) => console.log(err));
  };

  return { bookData, searchBook };
};

export default useBookSearch;
