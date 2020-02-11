import React, { Component } from "react";
import * as api from "../api";
import CommentsCard from "./CommentsCard";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import FormAddComment from "./FormAddComment";
import style from "../CSS/comments.module.css";

export default class CommentsById extends Component {
  state = {
    comments: [],
    showComments: true
  };

  handleClick(event) {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  getComments = () => {
    api.fetchCommentsById(this.props.article).then(comments => {
      this.setState({ comments: comments });
    });
  };

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
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

  deleteComment = id => {
    api.deleteCommentById(id).then(() => {
      this.setState(({ comments }) => {
        return {
          comments: comments.filter(comment => comment.comment_id !== id)
        };
      });
    });
  };

  render() {
    const { comments, showComments } = this.state;

    return (
      <div>
        <ul>
          <Navbar expand="lg" variant="light" bg="light" className={style.nav}>
            <Container>
              <Navbar.Brand>Comments:</Navbar.Brand>
            </Container>
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item
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
          <br></br>{" "}
          <FormAddComment
            addComment={this.addComment}
            articleId={this.props.article}
            username={this.props.username}
          ></FormAddComment>
          <button
            onClick={() => {
              this.handleClick();
            }}
            type="button"
            class="bp3-button bp3-intent-primary "
            style={{ margin: "2rem" }}
          >
            {" "}
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          {showComments
            ? comments.map(comment => {
                return (
                  <CommentsCard
                    comment={comment}
                    key={comment.comment_id}
                    deleteComment={this.deleteComment}
                    username={this.props.username}
                    users={this.props.users}
                  ></CommentsCard>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}
