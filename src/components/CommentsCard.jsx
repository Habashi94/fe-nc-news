import React from "react";
import { Card, Button } from "react-bootstrap";
import formatDate from "../utils";
import VoteChanger from "./VoteChanger";

export default function CommentsCard({ comment, deleteComment }) {
  return (
    <div>
      <Card style={{ width: "50rem", marginTop: "1rem" }}>
        <Card.Header as="h5">{comment.author}</Card.Header>
        <Card.Body>
          <Card.Title>{comment.body}</Card.Title>
          <Card.Text>
            {<VoteChanger comment={comment}></VoteChanger>}
            <br></br> Posted on: {formatDate(comment.created_at)}
          </Card.Text>

          <Button variant="primary">Reply</Button>
          <Button
            variant="danger"
            onClick={() => {
              deleteComment(comment.comment_id);
            }}
          >
            Delete{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
