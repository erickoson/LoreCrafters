// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { getTopHeadlines } from '../services/newsService';

const Home = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articles = await getTopHeadlines();
        setTopHeadlines(articles);
      } catch (error) {
        console.error('Error fetching top headlines:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {topHeadlines.map((article) => (
          <li key={article.title}>
            <strong>{article.title}</strong> - {article.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

