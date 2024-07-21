import axios from "axios";
import "./Home.css";
import React, { useEffect, useState } from "react";
import NewsArticles from "../../components/NewsArticles/NewsArticles";

function Home() {
  const [news, setNews] = useState([]);
  const [serachQuery, setSearchQuery] = useState("pune");
  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${serachQuery}&from=2024-07-20&to=2024-07-20&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KAY}`
      );
      setNews(response.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [serachQuery]);

  return (
    <div>
      <h1>News App</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input-box"
      />
      <div className="news-container">
        {news.map((newArticles, index) => {
          const {
            author,
            title,
            url,
            urlToImage,
            publishedAt,
            content,
            description,
          } = newArticles;
          return (
            <NewsArticles
              key={index}
              author={author}
              title={title}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
