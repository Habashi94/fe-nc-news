import React from "react";
// import { Card } from "react-bootstrap";
import formatDate from "../utils";
import VoteChanger from "./VoteChanger";
// import style from "../CSS/comments.module.css";
import { Comment } from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";

export default function CommentsCard({
  comment,
  deleteComment,
  username,
  users
}) {
  let url = users.filter(user => {
    return user.username === comment.author;
  });

  return (
    <div id="commentBox" className="bp3-card bp3-interactive .bp3-elevation-4">
      <Comment.Group style={{ margin: "3rem" }}>
        <Comment>
          <div className="Votes">
            {" "}
            <Avatar
              as={comment.author}
              src={
                url[0].username === comment.author ? url[0].avatar_url : null
              }
            />
            {<VoteChanger comment={comment} username={username}></VoteChanger>}
          </div>

          <Comment.Content>
            <Comment.Author>{comment.author}</Comment.Author>
            <Comment.Metadata>
              <div>Posted on: {formatDate(comment.created_at)}</div>
            </Comment.Metadata>
            <Comment.Text>
              {comment.body}
              <br></br>
            </Comment.Text>

            {username && username === comment.author ? (
              <button
                class="trash-btn"
                onClick={() => {
                  deleteComment(comment.comment_id);
                }}
              >
                <i class="fa fa-trash"></i>
              </button>
            ) : null}
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </div>
  );
}
