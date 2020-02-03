import React from "react";
import { Link } from "@reach/router";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/topics"> Topics </Link>
      </nav>
    </div>
  );
}
