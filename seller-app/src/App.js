import { useState } from "react";
import { SearchProvider } from "./Context/SearchContext";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import Main from "./Components/Main";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <SearchProvider>
        <Header />
        <Main currentPage={currentPage} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </SearchProvider>
    </div>
  );
};

export default App;
