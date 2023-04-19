import React from "react";

const ArticleCard = ({ article }) => {
	
	let ArticleTitle = article.name.split(",")[1].replace(/ /g, "");
	ArticleTitle = ArticleTitle.replace('/', '/ ');
	
  return (
    
      <a href={`https://polisen.se${article.url}`}>
		  <div className="articleCard">
			<div className="articleCard-title">
			  <span>{ArticleTitle}</span>
			</div>
			<div className="articleCard-summary">
			  <span>{article.location.name}</span>
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
