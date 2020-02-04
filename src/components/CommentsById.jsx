import React, { Component } from "react";
import * as api from "../api";
import CommentsCard from "./CommentsCard";
export default class CommentsById extends Component {
  state = {
    comments: []
  };

  getComments = () => {
    api.fetchCommentsById(this.props.article).then(comments => {
      this.setState({ comments: comments });
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.getComments();
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <ul>
          <br></br>
          <h3>Comments:</h3>
          {comments.map(comment => {
            return (
              <CommentsCard
                comment={comment}
                key={comment.comment_id}
              ></CommentsCard>
            );
          })}
        </ul>
      </div>
    );
  }
}
