import React, { Component } from "react";
import * as api from "../api";
import { Spinner } from "react-bootstrap";
import SortBy from "./SortBy";
import ArticleCards from "./ArticleCards";
import OrderBy from "./OrderBy";
import style from "../CSS/card.module.css";
import { Button } from "@blueprintjs/core";

export default class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: "created_at",
    order: "desc",
    limit: 10,
    p: 1
  };

  getArticles = topic => {
    const { sort_by, order, limit, p } = this.state;
    api.fetchArticles(topic, sort_by, order, limit, p).then(results => {
      this.setState({ articles: results, isLoading: false });
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  handlingOrder = (text, key) => {
    this.setState({ [key]: text });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order ||
      this.state.p !== prevState.p
    ) {
      this.getArticles();
    }
  }

  incPage = inc => {
    this.setState(prevState => ({ p: prevState.p + inc }));
  };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading)
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
        <ul className={style.card}>
          {articles.map(article => {
            return (
              <ArticleCards
                article={article}
                key={article.article_id}
              ></ArticleCards>
            );
          })}
        </ul>
        <div id="pageButton">
          {" "}
          <Button
            onClick={() => {
              this.incPage(-1);
            }}
            disabled={this.state.p < 2}
            type="button"
            class="bp3-button bp3-intent-primary "
            id="nextButton"
            rightIcon="arrow-left"
          >
            Prev Page
          </Button>
          {this.state.p}
          <Button
            onClick={() => {
              this.incPage(1);
            }}
            disabled={articles.length < 10}
            type="button"
            class="bp3-button bp3-intent-primary "
            id="prevButton"
            rightIcon="arrow-right"
          >
            Next Page
          </Button>
          <br></br>
        </div>
      </div>
    );
  }
}
