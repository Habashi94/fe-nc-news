import React, { Component } from "react";
import * as api from "../api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0
  };

  handleClick = voteDifference => {
    const { article_id } = this.props;

    console.log(article_id);
    api.ArticleVoteChanger(article_id, voteDifference).then(() => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + voteDifference };
      });
    });
  };

  render() {
    const { comment } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={voteChange === 1}
        >
          UP
        </button>
        {comment.votes + voteChange}
        <button
          onClick={() => {
            this.handleClick(-1);
          }}
          disabled={voteChange === -1}
        >
          DOWN
        </button>
      </div>
    );
  }
}
