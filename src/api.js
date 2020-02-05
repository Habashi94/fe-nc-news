import axios from "axios";

export const fetchArticles = (topic, sort_by, order) => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/articles", {
      params: {
        topic,
        sort_by,
        order
      }
    })
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
      return data.article;
    });
};

export const fetchCommentsById = articleId => {
  return axios
    .get(`https://mh-nc-news.herokuapp.com/api/articles/${articleId}/comments`)
    .then(({ data }) => {
      return data.comments;
    });
};

export const postComment = (articleId, commentInfo) => {
  console.log(articleId);
  return axios
    .post(
      `https://mh-nc-news.herokuapp.com/api/articles/${articleId}/comments`,
      commentInfo
    )
    .then(({ data }) => {
      console.log(data, "api");
      return data.comment;
    });
};

export const deleteCommentById = commentId => {
  return axios.delete(
    `https://mh-nc-news.herokuapp.com/api/comments/${commentId}`
  );
};
