import axios from "axios";

export const fetchArticles = topic => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/articles", { params: topic })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopics = () => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data.topics;
    });
};

export const fetchArticle = articleId => {
  return axios
    .get(`https://mh-nc-news.herokuapp.com/api/articles/${articleId}`)
    .then(({ data }) => {
      console.log(data);
      return data.article;
    });
};

export const fetchCommentsById = articleId => {
  console.log(articleId);
  return axios
    .get(`https://mh-nc-news.herokuapp.com/api/articles/${articleId}/comments`)
    .then(({ data }) => {
      console.log(data);
      return data.comments;
    });
};
