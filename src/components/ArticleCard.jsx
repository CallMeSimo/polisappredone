import React from "react";

const ArticleCard = ({ article }) => {
  return (
    
      <a href={`https://polisen.se${article.url}`}>
		  <div className="articleCard">
			<div className="articleCard-title">
			  <span>{article.name.split(",")[1].replace(/ /g, "")}</span>
			</div>
			<div className="articleCard-summary">
			  <span>{article.name.split(",")[2].replace(/ /g, "")}</span>
			</div>
			<div className="articleCard-date">
			  <span>{article.datetime.slice(5, 11)}</span>
			</div>
			<div className="articleCard-date">
			  <span>Casual</span>
			</div>
		</div>
      </a>

  );
};

export default ArticleCard;
