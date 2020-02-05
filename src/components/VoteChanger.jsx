import React, { Component } from "react";

export default class VoteChanger extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        <selection>
          <button>UP</button>
          {comment.votes}
          <button>DOWN</button>
        </selection>
      </div>
    );
  }
}
