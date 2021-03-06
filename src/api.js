import axios from "axios";

export const fetchArticles = (topic, sort_by, order, limit, p, author) => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/articles", {
      params: {
        topic,
        sort_by,
        order,
        limit,
        p,
        author
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

export const voteChanger = (commentId, newVote) => {
  return axios.patch(
    `https://mh-nc-news.herokuapp.com/api/comments/${commentId}`,
    { inc_votes: newVote }
  );
};

export const fetchUsers = () => {
  return axios
    .get("https://mh-nc-news.herokuapp.com/api/users")
    .then(({ data }) => {
      return data.users;
    });
};

export const ArticleVoteChanger = (id, newVote) => {
  return axios.patch(`https://mh-nc-news.herokuapp.com/api/articles/${id}`, {
    inc_votes: newVote
  });
};
