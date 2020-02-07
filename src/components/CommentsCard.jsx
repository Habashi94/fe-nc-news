import React from "react";
import { Card } from "react-bootstrap";
import formatDate from "../utils";
import VoteChanger from "./VoteChanger";
import style from "../CSS/comments.module.css";

export default function CommentsCard({ comment, deleteComment, username }) {
  return (
    <div>
      <Card className={style.commentCard}>
        <Card.Header as="h5">{comment.author}</Card.Header>
        <Card.Body>
          <Card.Title>{comment.body}</Card.Title>
          <Card.Text>
            {<VoteChanger comment={comment} username={username}></VoteChanger>}
            <br></br> Posted on: {formatDate(comment.created_at)}
          </Card.Text>

          {username && username === comment.author ? (
            <button
              class="trash-btn"
              onClick={() => {
                deleteComment(comment.comment_id);
              }}
            >
              <i class="fa fa-trash"></i>
            </button>
          ) : // <Button
          //   variant="danger"
          //   onClick={() => {
          //     deleteComment(comment.comment_id);
          //   }}
          //   // disabled={comment.author !== username}
          // >
          //   Delete{" "}
          // </Button>
          null}
        </Card.Body>
      </Card>
    </div>
  );
}
