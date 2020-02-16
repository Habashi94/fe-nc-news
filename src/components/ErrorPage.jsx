import React from "react";

export default function ErrorPage({ err }) {
  if (err) {
    return (
      <div id="errorMsg">
        <h3 id="errorHeader">
          {err.response.status} {err.response.statusText}{" "}
          {err.response.data.msg}
        </h3>
      </div>
    );
  }

  return <h4 id="errorHeader">404 Page Not Found </h4>;
}
