import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import BookDetailPage from "./components/BookDetailPage/BookDetailPage";
import "./components/styles/common.css";
import { BOOK_PATH } from "../src/components/Constants/constants";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={BOOK_PATH} element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
