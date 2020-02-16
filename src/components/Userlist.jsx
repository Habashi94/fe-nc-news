import React, { Component } from "react";
import * as api from "../api";
import { Card, Image, Button } from "semantic-ui-react";
// import { Button } from "@blueprintjs/core";
// import { Card, Button } from "react-bootstrap";
import { Link } from "@reach/router";

export default class Userlist extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    api.fetchUsers().then(users => {
      this.setState({ users: users });
    });
  }

  addDefaultSrc = event => {
    event.target.src =
      "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";
  };

  render() {
    const { users } = this.state;
    return (
      <div id="userCard">
        {users.map(user => {
          return (
            <ul>
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
