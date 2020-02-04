import React from "react";
// import { Link } from "@reach/router";
import { Card, Button } from "react-bootstrap";

export default function ArticleCards({ article }) {
  return (
    <div>
      <Card
        className="text-center"
        style={{ width: "50rem", marginTop: "1rem" }}
      >
        <Card.Header>{article.topic}</Card.Header>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.{Date.now()}
          </Card.Text>
          <Button variant="primary" href={`/articles/${article.article_id}`}>
            View Article
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">{article.created_at}</Card.Footer>
      </Card>
    </div>
  );
}
