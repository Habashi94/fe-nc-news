import React from "react";

export default function ErrorPage({ err }) {
  if (err) {
    return (
      <div>
        <h3>
          {err.response.status} {err.response.statusText}{" "}
          {err.response.data.msg}
        </h3>
      </div>
    );
  }

  return <h4>404 Page Not Found </h4>;
}

