import React, { Component } from "react";
import * as api from "../api";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "@reach/router";
import ErrorPage from "./ErrorPage";
import { Spinner } from "react-bootstrap";

export default class Userlist extends Component {
  state = {
    users: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    api.fetchUsers().then(users => {
      this.setState({ users: users, isLoading: false });
    });
  }

  addDefaultSrc = event => {
    event.target.src =
      "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
  };

  render() {
    const { users, isLoading, err } = this.state;
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
      <div id="userCard">
        {users.map(user => {
          return (
            <ul key={user.username}>
              <Card>
                <Image
                  onError={this.addDefaultSrc}
                  src={user.avatar_url}
                  wrapped
                  ui={false}
                />

                <Card.Content>
                  <Card.Header>{user.name}</Card.Header>
                  <Card.Meta></Card.Meta>
                  <Card.Description>Username: {user.username}</Card.Description>
                </Card.Content>
                <Link to={`/articles/users/${user.username}`}>
                  <Button> View {user.username} Articles</Button>
                </Link>
              </Card>
            </ul>
          );
        })}
      </div>
    );
  }
}
