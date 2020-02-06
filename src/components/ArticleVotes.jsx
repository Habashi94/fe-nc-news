import React, { Component } from "react";
import * as api from "../api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0
  };

  handleClick = voteDifference => {
    const { article } = this.props;
    console.log(article.article_id);
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
          UP
        </button>
        {article.votes + voteChange}
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={voteChange === -1 || !username}
        >
          DOWN
        </button>
      </div>
    );
  }
}
