import React from "react";
import { Link } from "@reach/router";
import formatDate from "../utils";
import { Button, Card, Elevation } from "@blueprintjs/core";
export default function ArticleCards({ article }) {
  return (
    <div className="bp3-card.modifier">
      <Card
        className="bp3-card"
        style={{
          margin: "1rem",
          borderRadius: "30px 20px",
          backgroundColor: "white",
          color: "black"
        }}
        elevation={Elevation.FOUR}
      >
        <h5>{article.topic.toUpperCase()}</h5>
        <p>
          {article.title}
          <br></br>
          comments : {article.comment_count} <i class="fa fa-comments-o"></i>
          <br></br>
          Votes : {article.votes} <i class="fa fa-star"></i>
          <br></br>
          Posted on : {formatDate(article.created_at)}
          <br></br>
          Posted by : {article.author}
        </p>

        <Link to={`/articles/${article.article_id}`}>
          <Button>View Article</Button>
        </Link>
      </Card>
    </div>
  );
}
