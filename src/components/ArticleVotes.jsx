import React, { Component } from "react";
import * as api from "../api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0
  };

  handleClick = voteDifference => {
    const { article } = this.props;

    api.ArticleVoteChanger(article.article_id, voteDifference).then(() => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + voteDifference };
      });
    });
  };

  render() {
    const { article, username } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={voteChange === 1 || !username}
        >
          <i
            className={
              voteChange === 1 ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"
            }
            style={{ color: "blue", fontSize: "20px" }}
          ></i>
        </button>
        {article.votes + voteChange}
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={voteChange === -1 || !username}
        >
          <i
            class={
              voteChange === -1 ? "fa fa-thumbs-down" : "fa fa-thumbs-o-down"
            }
            style={{ color: "red", fontSize: "20px" }}
          ></i>
        </button>
      </div>
    );
  }
}
