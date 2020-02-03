import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import TopicsPage from "./components/TopicsPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Homepage path="/home"></Homepage>
        <TopicsPage path="/topics"></TopicsPage>
      </Router>
    </div>
  );
}

export default App;
