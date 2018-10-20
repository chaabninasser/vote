import React from "react";
import ReactDOM from "react-dom";
import VotingComponent from "./components/VotingComponent";
import Layout from "./components/Layout";

const vote = {
  title: "How is your Car?",
  description: "Tell me: How has your car  so far?",
  choices: [
    { id: "choice_1", title: "Good", count: 0 },
    { id: "choice_2", title: "Bad", count: 0 },
    { id: "choice_3", title: "Not sure yet", count: 1 }
  ]
};

ReactDOM.render(
  <Layout>
    <VotingComponent vote={vote} />
  </Layout>,
  document.body
);
