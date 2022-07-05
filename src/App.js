import { useEffect, useState } from "react";

import ArticleCard from "./components/ArticleCard.jsx";
import Header from "./components/Header";

import "./App.css";
import searchIcon from "./images/search.svg";

import Categories from "./components/categories.js";
import Type from "./components/Type.jsx";

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [category, setCategory] = useState([]);

  let allTypes = document.querySelectorAll(".type");
  allTypes.forEach((element) => {
    element.addEventListener("click", () => {
      setCategory(element.id);
    });
  });

  const fetchCity = async (query) => {
    const response = await fetch(
      `https://polisen.se/api/events?locationname=${query}`
    );
    const apiData = await response.json();
    setJsonData(apiData);
    console.log(jsonData);
  };

  //  On page load
  useEffect(() => {
    fetchCity(searchQuery);
  }, [searchQuery]);

  return (
    <div>
      <Header />
      <div>
        {/* {Categories.map((type) => ( //in development
          <div className="categoryList">
            <Type type={type} />
          </div>
        ))} */}
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
              fetchCity(searchQuery);
            }}
          />
        </div>
        {jsonData.length > 0 ? (
          <div className="articleContainer">
            {jsonData.map(
              (article) =>
                (article.type = category ? (
                  <ArticleCard article={article} />
                ) : (
                  console.log(category + " VS " + article)
                ))
            )}
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
