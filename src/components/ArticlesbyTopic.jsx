import React, { Component } from "react";
import * as api from "../api";
import ArticleCards from "./ArticleCards";
import ErrorPage from "./ErrorPage";
import style from "../CSS/article.module.css";
import { Spinner } from "react-bootstrap";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";

export default class ArticlesbyTopic extends Component {
  state = {
    articles: [],
    sort_by: "created_at",
    order: "desc",
    isLoading: true,
    err: null
  };
  getArticles = () => {
    const { sort_by, order } = this.state;
    const { topic } = this.props;

    api
      .fetchArticles(topic, sort_by, order)
      .then(results => {
        this.setState({ articles: results, isLoading: false });
      })
      .catch(err => this.setState({ err }));
  };
  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.getArticles();
    }
  }
  handlingOrder = (text, key) => {
    this.setState({ [key]: text });
  };

  render() {
    const { articles, err, isLoading } = this.state;
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
        <div className="sorting">
          {" "}
          <p className="sortBy">Sort by:</p>{" "}
          <SortBy handlingOrder={this.handlingOrder}></SortBy>
          <p className="orderBy">Order:</p>{" "}
          <OrderBy handlingOrder={this.handlingOrder}></OrderBy>
        </div>{" "}
        <ul className={style.article}>
          {articles.map(article => {
            return (
              <ol key={article.article_id}>
                <ArticleCards article={article}></ArticleCards>
              </ol>
            );
          })}
        </ul>
      </div>
    );
  }
}
