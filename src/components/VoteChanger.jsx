import React, { Component } from "react";
import * as api from "../api";

export default class VoteChanger extends Component {
  state = {
    voteChange: 0
  };

  handleClick = voteDifference => {
    const { comment } = this.props;

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
      <div className="voteCount">
        <button
          onClick={() => {
            this.handleClick(1);
          }}
          disabled={voteChange === 1 || !username}
        >
          <i
            class={voteChange === 1 ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}
            style={{ color: "blue", fontSize: "20px" }}
          ></i>
        </button>
        <br></br>
        {comment.votes + voteChange}
        <br></br>
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
