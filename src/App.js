import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import BookDetailPage from "./components/BookDetailPage";
import "./components/styles/common.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
