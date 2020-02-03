import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/articles")
    .then(({ data }) => {
      console.log(data);
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      console.log(data);
      return data.topics;
    });
};
