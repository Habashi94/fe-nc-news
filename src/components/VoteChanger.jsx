import React, { Component } from "react";
import * as api from "../api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0
  };

  handleClick = voteDifference => {
    const { comment } = this.props;
    console.log(comment.comment_id);
    api.voteChanger(comment.comment_id, voteDifference).then(() => {
      this.setState(currentState => {
        return { voteChange: currentState.voteChange + voteDifference };
      });
    });
  };

  render() {
    const { comment, username } = this.props;
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
        {comment.votes + voteChange}
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
