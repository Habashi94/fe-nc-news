import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";
import { Card, CardDeck } from "react-bootstrap";
import style from "../CSS/card.module.css";
import { Spinner } from "react-bootstrap";

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
    } else if (isLoading)
      return (
        <div>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </div>
      );
    return (
      <div>
        <h4 id="topicHeader">Topics</h4>
        <ul className={style.topicCard}>
          {topics.map(topic => {
            return (
              <CardDeck className={style.topicPageCard} key={topic.slug}>
                <Card border="primary">
                  <Card.Img
                    variant="top"
                    src={
                      topic.slug === "football"
                        ? "https://targetcareers.co.uk/sites/targetcareers.co.uk/files/public/styles/header_1500x550/public/field/image/football.jpg?itok=O1dRVOeD"
                        : null || topic.slug === "coding"
                        ? "https://spacetab.github.io/portfolio/assets/images/baner-code..jpg"
                        : null || topic.slug === "cooking"
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1tCbjmu94Xh5w78NBDCR77MLDlZVSthZyeQiwKwc8Lu0OgPl5"
                        : null
                    }
                    roundedCircle
                  />
                  <Card.Body>
                    <Card.Title>{topic.slug.toUpperCase()}</Card.Title>
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
