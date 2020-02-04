import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CommentsCard({ comment }) {
  return (
    <div>
      <Card style={{ width: "50rem", marginTop: "1rem" }}>
        <Card.Header as="h5">{comment.author}</Card.Header>
        <Card.Body>
          <Card.Title>{comment.body}</Card.Title>
          <Card.Text>Votes: {comment.votes}</Card.Text>
          <Button variant="primary">Reply</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
