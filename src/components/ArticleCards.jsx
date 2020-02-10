import React from "react";
import { Link } from "@reach/router";
// import { Card, Button } from "react-bootstrap";
import formatDate from "../utils";
import { Button, Card } from "@blueprintjs/core";
export default function ArticleCards({ article }) {
  return (
    <div className="bp3-card.modifier">
      <Card
        className="bp3-card bp3-interactive .bp3-elevation-3"
        style={{ margin: "1rem" }}
      >
        <h5>{article.topic.toUpperCase()}</h5>
        <p>
          {article.title}
          <br></br>
          comment count: {article.comment_count}
          <br></br>
          Votes : {article.votes}
          <br></br>
          Posted on : {formatDate(article.created_at)}
        </p>

        <Link to={`/articles/${article.article_id}`}>
          <Button>View Article</Button>
        </Link>
      </Card>
    </div>
  );
}
