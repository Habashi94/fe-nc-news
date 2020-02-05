import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

export default class TopicsPage extends Component {
  state = {
    topics: [],
    isLoading: true
  };
  getTopics = () => {
    api.fetchTopics().then(results => {
      this.setState({ topics: results, isLoading: false });
    });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <p>Loading....</p>;
    return (
      <div>
        Topics
        <ul>
          {topics.map(topic => {
            return (
              <li key={topic.slug}>
                <Link to={`/${topic.slug}`}>{topic.slug}</Link>
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
