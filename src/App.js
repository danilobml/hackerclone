import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import NewsCard from "./Components/NewsCard/NewsCard";
import Footer from "./Components/Footer/Footer";
import PacmanLoader from "react-spinners/PacmanLoader";
import NoResults from "./Components/Messages/NoResults";
import Error from "./Components/Messages/Error";
import Pagination from "@material-ui/lab/Pagination";

function App() {
  const [data, setData] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [numberPages, setNumberPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = new URL("http://hn.algolia.com/api/v1/search_by_date");
    url.searchParams.set("tags", "story");
    searchQuery && url.searchParams.set("query", searchQuery);
    url.searchParams.set("hitsPerPage", 30);
    page !== 1 && url.searchParams.set("page", page);

    setIsLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`An error has occurred. Status code: ${res.status}`);
        }
        return res.json();
      })
      .then((info) => {
        setNumberPages(info.nbPages);
        if (!info.nbHits) {
          setNoResults(true);
        }
        setData(info.hits);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [searchQuery, page]);

  const handleSearch = (event) => {
    event.preventDefault();
    setNoResults(false);
    if (userInput) {
      setSearchQuery(userInput);
      //makes input blank
      event.target.reset();
    }
  };

  const handleChangePage = (_, page) => {
    setPage(page);
  };

  if (isLoading)
    return (
      <div className="loading">
        <PacmanLoader size={30} />
      </div>
    );

  return (
    <div>
      <div className="App">
        <div className="main-container">
          <Navbar />
          {isError ? <Error /> : noResults ? <NoResults userInput={userInput} /> : <div className="newscard-container">{data && data.map((item, index) => <NewsCard key={index} data={item} index={index} page={page} />)}</div>}
          <div className="pagination-div">
            <Pagination count={numberPages - 1} page={page} onChange={handleChangePage} />
          </div>
          <Footer handleSearch={handleSearch} setUserInput={setUserInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
