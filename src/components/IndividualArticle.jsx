import React, { Component } from "react";
import * as api from "../api";
import CommentsById from "./CommentsById";
import ArticleVotes from "./ArticleVotes";
import ErrorPage from "./ErrorPage";

export default class IndividualArticle extends Component {
  state = {
    article: {},
    err: null
  };

  getArticle = () => {
    api
      .fetchArticle(this.props.article_id)
      .then(article => {
        this.setState({ article: article });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.getArticle();
  }
  render() {
    const { article, err } = this.state;

    if (err) {
      return <ErrorPage err={err}></ErrorPage>;
    }

    return (
      <div>
        <ul>
          <ol>
            <h2>{article.title} </h2>
          </ol>
          <br></br>
          <ol>
            <p>{article.body}</p>{" "}
          </ol>
          <ol>
            Votes :{" "}
            <ArticleVotes
              article={article}
              username={this.props.username}
            ></ArticleVotes>
          </ol>
        </ul>{" "}
        <CommentsById
          article={article.article_id}
          username={this.props.username}
        ></CommentsById>
      </div>
    );
  }
}
