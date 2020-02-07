import React, { Component } from "react";
import * as api from "../api";
import CommentsById from "./CommentsById";
import ArticleVotes from "./ArticleVotes";
import ErrorPage from "./ErrorPage";
import { Spinner } from "react-bootstrap";

export default class IndividualArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null
  };

  getArticle = () => {
    api
      .fetchArticle(this.props.article_id)
      .then(article => {
        this.setState({ article: article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.getArticle();
  }
  render() {
    const { article, err, isLoading } = this.state;

    if (err) {
      return <ErrorPage err={err}></ErrorPage>;
    } else if (isLoading)
      return (
        <div>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
      );
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
