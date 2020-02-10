import React, { Component } from "react";
import * as api from "../api";
import CommentsById from "./CommentsById";
import ArticleVotes from "./ArticleVotes";
import ErrorPage from "./ErrorPage";
import { Spinner, Card } from "react-bootstrap";

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
        <Card border="primary" className="singleArticle">
          <Card.Header>{article.title}</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>{article.body}</Card.Text>
            Votes :{" "}
            <ArticleVotes
              article={article}
              username={this.props.username}
            ></ArticleVotes>
          </Card.Body>
          <Card.Footer>Posted by : {article.author}</Card.Footer>
        </Card>
        <br></br>
        <CommentsById
          article={article.article_id}
          username={this.props.username}
          users={this.props.users}
        ></CommentsById>
      </div>
    );
  }
}
