import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";

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
        Topics
        <ul>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link to={`/topic/${topic.slug}`}>{topic.slug}</Link>
                <br></br>
                Description: {topic.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
