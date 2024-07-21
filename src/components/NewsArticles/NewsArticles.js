import React from "react";
import "./NewsArticles.css";
function NewsArticles({
  author,
  title,
  url,
  urlToImage,
  description,
  publishedAt,
  content,
}) {
  return (
    <div className="news-articles-card">
      <img src={urlToImage} className="url-image" />
      <h3 className="articles-title">{title ? title.slice(0 , 60) :"No title avaiable"}

      </h3>
      <div className="articles-info">
        <p className="articles-auther">{author}</p>
        <p className="articles-publishedAt">{publishedAt}</p>
      </div>
      <p className="articles-description">
        {description ? description.slice(0, 100) : "No description available"}
        ...
      </p>
      <a href={url} target="_blank" className="read-more-btn">
        read More
      </a>
    </div>
  );
}

export default NewsArticles;
