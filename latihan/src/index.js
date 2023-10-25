import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from "react";
// import ReactDOM from "react-dom/client";
// // const myElement = <h1>code ini menggunakan jsx</h1>;

// const myElement = React.createElement(
//   "h1",
//   {},
//   "code ini tidak menggunakan jsx"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myElement);
