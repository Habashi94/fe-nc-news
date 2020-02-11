import React from "react";
import { Link } from "@reach/router";
// import { Card, Button } from "react-bootstrap";
import formatDate from "../utils";
import { Button, Card, Elevation } from "@blueprintjs/core";
export default function ArticleCards({ article }) {
  return (
    <div className="bp3-card.modifier">
      <Card
        className="bp3-card"
        style={{ margin: "1rem", borderRadius: "30px 20px" , backgroundColor:'white', color:'black'}}
        elevation={Elevation.FOUR}
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
