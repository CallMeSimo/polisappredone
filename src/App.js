import { useEffect, useState } from "react";

import ArticleCard from "./components/ArticleCard.jsx";
import Header from "./components/Header";

import "./App.css";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import Categories from "./components/categories.js";
import Type from "./components/Type.jsx";

import * as THREE from "three";

import BIRDS from "vanta/dist/vanta.birds.min.js";
const App = () => {
  // Getter Setter for categoryListToggled
  const [categoryListToggled, setCategoryListToggled] = useState(false);

  // Getter Setter for jsonData
  const [jsonData, setJsonData] = useState([]);

  // Getter Setter for searchQuery
  const [searchQuery, setSearchQuery] = useState([]);

  // Getter Setter for Category
  const [category, setCategory] = useState("none");

  // Fetch query, City only ( maybe works with region aswell)
  const fetchCity = async (query) => {
    const response = await fetch(
      `https://polisen.se/api/events?locationname=${query}`
    );
    let apiData = await response.json();

    // This filters through the data,
    // currently does not work with tags with more than one word
    console.log(category);
    if (category != "none") {
      apiData = apiData.filter(
        (article) => article.name.split(",")[1].replace(/ /g, "") == category
      );
    }

    setJsonData(apiData);
  };

  // Rule for the category menu button, true = open, false = close
  const categoryToggle = () => {
    setCategoryListToggled(!categoryListToggled);
  };

  //  Fetch when searchQuery OR category state changes
  useEffect(() => {
    fetchCity(searchQuery);
  }, [searchQuery]);
  useEffect(() => {
    fetchCity(searchQuery);
  }, [category]);

  // THIS is for vanta.
  // Creates the NECESSARY elements attrb it needs.
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="categoryContainer">
          <Button
            startIcon={<MenuIcon />}
            size="larger"
            onClick={categoryToggle}
            className="categoryButton"
          />
          {/* Appends the categoryies HERE  */}
          {/* Remove the <p> when issue is fixed.*/}
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; Note: some tags do not work yet!
          </p>{" "}
          <div className="categoryList">
            {categoryListToggled ? (
              Categories.map((type) => (
                <Type
                  type={type}
                  setCategoryListToggled={setCategoryListToggled}
                  setCategory={setCategory}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="SearchBar">
          {" "}
          <input
            placeholder="Search CITY here"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </div>
        {jsonData.length > 0 ? (
          <div className="articleContainer">
            {/* Appends the articles HERE */}
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
