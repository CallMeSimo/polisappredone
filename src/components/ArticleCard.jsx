import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <a href={`https://polisen.se${article.url}`}>
        <div className="articleCard-title">
          <span>{article.name}</span>
        </div>
        <div className="articleCard-date">
          <span>{article.datetime}</span>
        </div>
        <hr />
        <div className="articleCard-summary">
          <span>{article.summary}</span>
        </div>
      </a>
    </div>
  );
};

export default ArticleCard;
