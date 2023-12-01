import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

api.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      accept: 'application/json',
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
