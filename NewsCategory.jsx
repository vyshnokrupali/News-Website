import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsCategory = ({ category, search }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const baseUrl = "https://newsapi.org/v2/";
    const apiKey = import.meta.env.VITE_API_KEY;

    let url = category
      ? `${baseUrl}top-headlines?country=us&category=${category}&apiKey=${apiKey}`
      : `${baseUrl}everything?q=${search}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error("Error fetching data:", error));
  }, [category, search]);

  return (
    <div>
      <h2 className="text-center">
        <span className="badge rounded-pill bg-success">
          Stay Updated With Latest News
        </span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCategory;
