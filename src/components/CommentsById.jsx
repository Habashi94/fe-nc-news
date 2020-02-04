import React, { Component } from "react";
import * as api from "../api";
import CommentsCard from "./CommentsCard";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import FormAddComment from "./FormAddComment";
export default class CommentsById extends Component {
  state = {
    comments: []
  };

  getComments = () => {
    api.fetchCommentsById(this.props.article).then(comments => {
      this.setState({ comments: comments });
    });
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) this.getComments();
  }

  ascendingOrder = () => {
    const { comments } = this.state;
    const orderComments = comments.sort((a, b) => {
      return a.votes - b.votes;
    });
    this.setState({ comments: orderComments });
  };

  descendingOrder = () => {
    const { comments } = this.state;
    const orderComments = comments.sort((a, b) => {
      return b.votes - a.votes;
    });
    this.setState({ comments: orderComments });
  };

  addComment = newComment => {
    this.setState(currentState => {
      return { comments: [newComment, ...currentState.comments] };
    });
  };

  render() {
    const { comments } = this.state;

    return (
      <div>
        <ul>
          <Navbar
            expand="lg"
            variant="light"
            bg="light"
            style={{ width: "50rem", marginTop: "1rem" }}
          >
            <Container>
              <Navbar.Brand href="#">Comments:</Navbar.Brand>
            </Container>
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#action/3.1"
                onClick={event => {
                  event.preventDefault();
                  this.ascendingOrder();
                }}
              >
                Votes Ascending
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                onClick={event => {
                  event.preventDefault();
                  this.descendingOrder();
                }}
              >
                Votes descending
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Date Posted
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar>

          {comments.map(comment => {
            return (
              <CommentsCard
                comment={comment}
                key={comment.comment_id}
              ></CommentsCard>
            );
          })}
        </ul>
        <FormAddComment
          addComment={this.addComment}
          articleId={this.props.article}
        ></FormAddComment>
      </div>
    );
  }
}
