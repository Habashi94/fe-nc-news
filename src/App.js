import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Router } from "@reach/router";
import TopicsPage from "./components/TopicsPage";
import NavBar from "./components/NavBar";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Homepage path="/home"></Homepage>
        <TopicsPage path="/topics"></TopicsPage>
        <IndividualArticle path="/articles/:article_id"></IndividualArticle>
      </Router>
    </div>
  );
}

export default App;
