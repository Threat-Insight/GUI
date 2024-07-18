import React, { useEffect, useState } from "react";
import "../css/components-css/News.css";
import "../css/global.css";
import Phishing from "../img/phishing.png";
import Cards from "./Card";

const CVE = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=phishing&language=en&apiKey=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const filteredArticles = data.articles.filter(
          (article) => article.author && !isLikelyEmailAddress(article.author)
        );
        setArticles(filteredArticles.slice(0, 10));
      } catch (error) {
        setError(error);
      }
    };

    if (apiKey) {
      fetchArticles();
    }
  }, [apiKey]);

  const isLikelyEmailAddress = (name) => {
    return /\S+@\S+\.\S+/.test(name);
  };

  const truncateTitle = (title, wordLimit) => {
    return title.split(" ").slice(0, wordLimit).join(" ") + " ...";
  };

  if (error) {
    return (
      <section className="section">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          Error: {error.message}
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="news container">
        <p className="heading-text">Trending News</p>
        <div className="slider">
          <div className="slides trending-news">
            {articles.map((article, index) => (
              <Cards
                key={index}
                urlToImage={article.urlToImage || Phishing}
                title={article.source.name}
                author={article.author}
                details={truncateTitle(article.content, 2)}
                href={article.url}
              />
            ))}
            {articles.map((article, index) => (
              <Cards
                key={index}
                urlToImage={article.urlToImage || Phishing}
                title={article.source.name}
                author={article.author}
                details={truncateTitle(article.content, 2)}
                href={article.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVE;
