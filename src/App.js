import { useEffect, useState } from "react";

import ArticleCard from "./ArticleCard.jsx";
import Header from "./Header";

import "./App.css";
import searchIcon from "./images/search.svg";

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  //   THIS IS FOR REFRENCE
  //   id: 348267,
  //   datetime: "2022-07-01 12:40:36 +02:00",
  //   name: "01 juli 11:08, Trafikolycka, personskada, Enköping",
  //   summary: "Man till sjukhus efter trafikolycka.",
  //   url: "/aktuellt/handelser/2022/juli/1/01-juli-1108-trafikolycka-personskada-enkoping/",
  //   type: "Trafikolycka, personskada",
  //   location: {
  //     name: "Enköping",
  //     gps: "59.635691,17.077823",

  const fetchApi = async (query) => {
    const response = await fetch(
      `https://polisen.se/api/events?locationname=${query}`
    );
    const apiData = await response.json();
    setJsonData(apiData);
    console.log(apiData);
    console.log(jsonData);
  };

  //  On page load
  useEffect(() => {
    fetchApi("");
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="SearchBar">
          {" "}
          <input
            placeholder="Search CITY here"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <img
            src={searchIcon}
            onClick={() => {
              fetchApi(searchQuery);
            }}
          />
        </div>
        {jsonData.length > 0 ? (
          <div className="articleContainer">
            {jsonData.map((article) => (
              <ArticleCard article={article} />
            ))}
          </div>
        ) : (
          <div className="data404">
            <h2> No data found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
