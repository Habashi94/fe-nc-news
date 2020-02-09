import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import Avatar from "@material-ui/core/Avatar";

export default function LoginPage({ users, username, handleClick }) {
  return (
    <div>
      {username ? (
        <Button id="logged-in" disabled variant="Secondary">
          Signed in as : {username}
        </Button>
      ) : null}
      {!username ? (
        <Dropdown>
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            Sign in
          </Dropdown.Toggle>

          <Dropdown.Menu onClick={handleClick}>
            {users.map(user => {
              return (
                <Dropdown.Item name={user.username} key={user.username}>
                  {user.username}
                  <Avatar alt={user.username} src={user.avatar_url} />
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Button onClick={handleClick} name="" variant="Secondary">
          Logout
        </Button>
      )}
    </div>
  );
}
