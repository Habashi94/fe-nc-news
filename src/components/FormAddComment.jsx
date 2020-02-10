import React, { Component } from "react";
import * as api from "../api";
// import { Form, Button } from "react-bootstrap";
import style from "../CSS/comments.module.css";
import { Form, Button } from "semantic-ui-react";

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
        <Form reply className={style.form} onSubmit={this.handleSubmit}>
          {!this.props.username ? null : "Welcome Back "}
          {this.props.username}
          <br></br>
          <Form.TextArea
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
          <Button
            content="Add Comment"
            labelPosition="left"
            icon="edit"
            primary
            disabled={!this.props.username}
          />
        </Form>
      </div>
    );
  }
}
