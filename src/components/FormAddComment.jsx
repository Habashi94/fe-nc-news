import React, { Component } from "react";
import * as api from "../api";
import { Form, Button } from "react-bootstrap";
export default class FormAddComment extends Component {
  state = {
    username: "" || "jessjelly",
    body: ""
  };

  handlingChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, body } = this.state;

    api.postComment(this.props.articleId, { username, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ username: "", body: "" });
      console.log("added");
    });
  };
  render() {
    return (
      <div>
        <Form style={{ width: "50rem" }} onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Add Comment:</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              onChange={this.handlingChange}
              name="username"
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label> Enter Text</Form.Label>
            <Form.Control
              type="text"
              rows="4"
              style={{ marginBottom: "1rem" }}
              onChange={this.handlingChange}
              name="body"
              value={this.state.body}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
