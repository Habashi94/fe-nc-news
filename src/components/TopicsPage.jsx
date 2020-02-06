import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";
import { Card, CardDeck } from "react-bootstrap";
import style from "../CSS/card.module.css";

export default class TopicsPage extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: null
  };
  getTopics = () => {
    api
      .fetchTopics()
      .then(results => {
        this.setState({ topics: results, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { topics, isLoading, err } = this.state;
    if (err) {
      return <ErrorPage err={err}></ErrorPage>;
    } else if (isLoading) return <p>Loading....</p>;
    return (
      <div>
        <h4>Topics</h4>
        <ul className={style.topicCard}>
          {topics.map(topic => {
            return (
              // <li key={topic.slug}>
              //   <Link to={`/topic/${topic.slug}`}>{topic.slug}</Link>
              //   <br></br>
              //   Description: {topic.description}

              // </li>

              <CardDeck style={{ width: "30rem" }}>
                <Card border="primary">
                  {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                  <Card.Body>
                    <Card.Title>{topic.slug}</Card.Title>
                    <Card.Text>Description: {topic.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={`/topic/${topic.slug}`}>
                      <small className="text-muted">View Articles</small>{" "}
                    </Link>
                  </Card.Footer>
                </Card>
              </CardDeck>
            );
          })}
        </ul>
      </div>
    );
  }
}
