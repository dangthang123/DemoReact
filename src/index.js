import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import './css/Responsive.css';
import { BrowserRouter } from "react-router-dom";
import store from "./component/Redux/store";
import { Provider } from "react-redux";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Apollo GraphQL client.
const client = new ApolloClient({
  uri: "http://localhost/dataWP/graphql",
  cache: new InMemoryCache(),
});
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
