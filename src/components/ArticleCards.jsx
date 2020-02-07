import React from "react";
import { Link } from "@reach/router";
import { Card, Button } from "react-bootstrap";
import formatDate from "../utils";

export default function ArticleCards({ article }) {
  return (
    <div>
      <Card
        className="text-center"
        // style={{ width: "40rem", marginTop: "1rem" }}
        border="info"
      >
        <Card.Header>{article.topic}</Card.Header>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            comment count: {article.comment_count}
            <br></br>
            Votes : {article.votes}
          </Card.Text>{" "}
          <Button
            variant="info"
            as={Link}
            to={`/articles/${article.article_id}`}
          >
            View Article
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {formatDate(article.created_at)}
        </Card.Footer>
      </Card>
    </div>
  );
}
