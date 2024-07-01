// import { useState } from "react";
// import useBookSearch from "./hooks/useBookSearch";
// import Book from "./Book";
// import "./styles/Main.css";
// import "./styles/common.css";

// const Main = () => {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [sort, setSort] = useState("relevance");
//   const { bookData, searchBook } = useBookSearch(search, category, sort);

//   const handleKeyPress = (evt) => {
//     if (evt.key === "Enter") {
//       searchBook();
//     }
//   };

//   const handleSearchClick = () => {
//     searchBook();
//   };

//   return (
//     <>
//       <div className="header">
//         <div className="row">
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Enter"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyPress={handleKeyPress}
//             />
//             <button className="btn-search" onClick={handleSearchClick}>
//               <i className="fas fa-search"></i>
//             </button>
//           </div>
//           <div className="filters">
//             <label className="category">Category: </label>
//             <select
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="all">All</option>
//               <option value="art">Art</option>
//               <option value="biography">Biography</option>
//               <option value="computers">Computers</option>
//               <option value="history">History</option>
//               <option value="medical">Medical</option>
//               <option value="poetry">Poetry</option>
//             </select>
//             <label className="sort">Sort by: </label>
//             <select
//               id="sort"
//               value={sort}
//               onChange={(e) => setSort(e.target.value)}
//             >
//               <option value="relevance">Relevance</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <Book book={bookData} />
//       </div>
//     </>
//   );
// };

// export default Main;

// import { useState } from "react";
// import useBookSearch from "./hooks/useBookSearch";
// import Book from "./Book";
// import "./styles/Main.css";
// import "./styles/common.css";

// const Main = () => {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");
//   const [sort, setSort] = useState("relevance");
//   const { bookData, searchBook, loading, error } = useBookSearch(
//     search,
//     category,
//     sort
//   );

//   const handleKeyPress = (evt) => {
//     if (evt.key === "Enter") {
//       searchBook();
//     }
//   };

//   const handleSearchClick = () => {
//     searchBook();
//   };

//   return (
//     <>
//       <div className="header">
//         <div className="row">
//           <div className="search">
//             <input
//               type="text"
//               placeholder="Enter"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               onKeyPress={handleKeyPress}
//             />
//             <button className="btn-search" onClick={handleSearchClick}>
//               <i className="fas fa-search"></i>
//             </button>
//           </div>
//           <div className="filters">
//             <label className="category">Category: </label>
//             <select
//               id="category"
//               value={category}
//               onChange={(e) => {
//                 setCategory(e.target.value);
//                 searchBook();
//               }}
//             >
//               <option value="all">All</option>
//               <option value="art">Art</option>
//               <option value="biography">Biography</option>
//               <option value="computers">Computers</option>
//               <option value="history">History</option>
//               <option value="medical">Medical</option>
//               <option value="poetry">Poetry</option>
//             </select>
//             <label className="sort">Sort by: </label>
//             <select
//               id="sort"
//               value={sort}
//               onChange={(e) => {
//                 setSort(e.target.value);
//                 searchBook();
//               }}
//             >
//               <option value="relevance">Relevance</option>
//               <option value="newest">Newest</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         {loading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//         <Book book={bookData} />
//       </div>
//     </>
//   );
// };

// export default Main;

import { useState } from "react";
import useBookSearch from "./hooks/useBookSearch";
import Book from "./Book";
import "./styles/Main.css";
import "./styles/common.css";

const Main = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("relevance");
  const { bookData, searchBook, loading, error } = useBookSearch(
    search,
    category,
    sort
  );

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      searchBook();
    }
  };

  const handleSearchClick = () => {
    searchBook();
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
              onChange={(e) => {
                setCategory(e.target.value);
                searchBook();
              }}
            >
              <option value="all">All</option>
              <option value="art">Art</option>
              <option value="biography">Biography</option>
              <option value="computers">Computers</option>
              <option value="history">History</option>
              <option value="medical">Medical</option>
              <option value="poetry">Poetry</option>
            </select>
            <label className="sort">Sort by: </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                searchBook();
              }}
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Book book={bookData} />
      </div>
    </>
  );
};

export default Main;
