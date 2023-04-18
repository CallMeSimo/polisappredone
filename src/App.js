import { useEffect, useState } from "react";

import ArticleCard from "./components/ArticleCard.jsx";
import Header from "./components/Header";
import Navbar from "./components/Navbar.jsx";
import Chart from "./components/Chart.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

import Categories from "./components/categories.js";
import Type from "./components/Type.jsx";

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
    <div className="World">
	<div className="experimentalArt">
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  <span>CallMeSimo</span>
	  </div>
      <Navbar />
      <Header />
      <div>
        <div className="categoryContainer">
          <Button
            startIcon={<MenuIcon />}
            size="larger"
            color="inherit"
            onClick={categoryToggle}
            className="categoryButton"
          />
          {/* Appends the categoryies HERE  */}
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
            placeholder="🔎"
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
	  <div className="Statistics">
		<Chart CityData={jsonData}/>
	  </div>
	  <div className="Featured">
		<h3> <span>R</span><span>e</span><span>a</span><span>l</span> <span>t</span><span>i</span><span>m</span><span>e</span> <colored>update</colored> <span>f</span><span>r</span><span>o</span><span>m</span> <colored>official</colored> <span>API</span></h3>
		<div className="FeaturedDescription">
			<p>In today's fast-paced digital world,
			staying up-to-date with the latest information is crucial. One of the most 
			reliable and efficient ways to receive real-time updates is through an 
			official API (Application Programming Interface). An API acts as a bridge between
			different software systems, allowing them to communicate and share data seamlessly. When 
			an official API is utilized, the information received is directly from the source, ensuring
			accuracy and reliability.
			<br/><br/><br/>
			Real-time updates from an official 
			API provide users with the most current data available, without 
			delays or manual input. This means that any changes or modifications made to the source
			data are reflected instantly, allowing for timely decision-making and informed actions. Whether it's
			financial data, weather updates, social media feeds, or any other type of dynamic information,
			an official API can deliver the most up-to-date data in a matter of seconds.
			<br/><br/><br/>
			Using an official API for real-time updates
			also ensures data integrity and security. Official APIs are 
			developed and maintained by authorized sources, following industry-standard 
			protocols and security measures. This helps to protect against unauthorized access, data breaches, 
			and tampering of information. Users can trust that the data received from an official API is accurate,
			reliable, and secure, making it a trustworthy source for real-time updates.</p>
		</div>
	  </div>
		<Footer/>
		
    </div>
  );
};

export default App;
