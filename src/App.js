import './App.css';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import NewsCard from './Components/NewsCard/NewsCard';

function App() {
  
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')
    .then((res) => res.json())
    // function to return only data items without the tag "ask_hn" in the API
    .then((info) => {
      info = info.hits.filter(item => {
        return !item._tags.includes("ask_hn") && item.url})
      setData(info)})
    },[]);
  
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <div className="newscard-container">
          {data && data.map((item, index) => <NewsCard key={index} data={item} index={index} /> )}
        </div>
      </div>
    </div>
  );
}

export default App;
