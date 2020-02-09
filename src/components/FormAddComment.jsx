import React, { Component } from "react";
import * as api from "../api";
import { Form, Button } from "react-bootstrap";
import style from "../CSS/comments.module.css";

export default class FormAddComment extends Component {
  state = {
    username: "",
    body: ""
  };

  handlingChange = event => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { username } = this.props;
    console.log(username);
    api.postComment(this.props.articleId, { username, body }).then(comment => {
      this.props.addComment(comment);
      this.setState({ username: "", body: "" });
      console.log("added");
    });
  };
  render() {
    return (
      <div>
        <Form className={style.form} onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Add Comment:</Form.Label>
            {/* <Form.Control
              type="text"
              placeholder="username"
              onChange={this.handlingChange}
              name="username"
              value={this.state.username}
            /> */}
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            {!this.props.username ? null : "Welcome Back "}
            <Form.Label> {this.props.username} </Form.Label>
            <Form.Control
              type="text"
              style={{ marginBottom: "1rem" }}
              onChange={this.handlingChange}
              name="body"
              value={this.state.body}
              placeholder={
                this.props.username ? "Comment away" : "Please sign in"
              }
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            disabled={!this.props.username}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
