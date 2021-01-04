import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HttpLink } from "@apollo/client/link/http";
import { setContext } from "@apollo/client/link/context";
const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://api.loaloa.tech/admin/api"
      : "https://api.loaloa.tech/admin/api",
  credentials: "same-origin",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
export const language = React.createContext("en");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Layout language={language} />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
