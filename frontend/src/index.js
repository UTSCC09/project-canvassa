import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

const htmlToElement = (html) => {
  const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};

const html = document.getElementsByTagName("html").item(0);
html.style.fontSize = "10px";

const head = document.getElementsByTagName("head").item(0);
head.appendChild(
  htmlToElement(`<link rel="preconnect" href="https://fonts.googleapis.com">`)
);
head.appendChild(
  htmlToElement(`
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`)
);
head.appendChild(
  htmlToElement(
    `<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">`
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={"dev-nlxpkku9.us.auth0.com"}
    clientId={"LG7SAyPXrZ6s1nEL8dgGpFT1hXHXYm53"}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
