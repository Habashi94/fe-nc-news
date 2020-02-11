import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import TopicsPage from "./components/TopicsPage";
import NavBar from "./components/NavBar";
import IndividualArticle from "./components/IndividualArticle";
import ArticlesbyTopic from "./components/ArticlesbyTopic";
import * as api from "./api";
import LoginPage from "./components/LoginPage";
import ErrorPage from "./components/ErrorPage";

export default class App extends React.Component {
  state = {
    users: [],
    username: ""
  };

  componentDidMount() {
    api.fetchUsers().then(users => {
      this.setState({ users: users });
    });
    if (localStorage.getItem("username")) {
      this.setState({ username: localStorage.getItem("username") });
    }
  }

  handleClick = event => {
    this.setState({ username: event.target.name });
    localStorage.setItem("username", event.target.name);
  };

  render() {
    const { users, username } = this.state;
    return (
      <div className="App">
        <Header />

        <NavBar />
        <LoginPage
          users={users}
          handleClick={this.handleClick}
          username={username}
        ></LoginPage>
        <Router>
          <Homepage path="/"></Homepage>
          <TopicsPage path="/topics"></TopicsPage>
          <IndividualArticle
            path="/articles/:article_id"
            username={username}
            users={users}
          ></IndividualArticle>
          <ArticlesbyTopic path="/topic/:topic"></ArticlesbyTopic>
          <ErrorPage default />
        </Router>
      </div>
    );
  }
}
