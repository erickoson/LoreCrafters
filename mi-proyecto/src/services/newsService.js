// services/newsService.js
import axios from 'axios';

const apiKey = '95d91c4284bd4441be8cd32cddf399a5'; // Regístrate en News API para obtener una clave API

const newsService = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

export const getTopHeadlines = async () => {
  try {
    const response = await newsService.get('/top-headlines', {
      params: {
        country: 'us', // Puedes ajustar el país según tus preferencias
        apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching top headlines:', error);
    return [];
  }
};

export default newsService;
