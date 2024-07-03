import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes";

export const fetchBookById = (id) => {
  return axios
    .get(`${API_URL}/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(`Error fetching book with id ${id}:`, err);
      throw err;
    });
};
