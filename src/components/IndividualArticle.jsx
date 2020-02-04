import React, { Component } from "react";
import * as api from "../api";
import CommentsById from "./CommentsById";

export default class IndividualArticle extends Component {
  state = {
    article: {}
  };

  getArticle = () => {
    api.fetchArticle(this.props.article_id).then(article => {
      this.setState({ article: article });
    });
  };

  componentDidMount() {
    this.getArticle();
  }
  render() {
    const { article } = this.state;

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
        </ul>{" "}
        <CommentsById article={article.article_id}></CommentsById>
      </div>
    );
  }
}
