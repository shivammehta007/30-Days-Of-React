import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Header Component

const Header = (props) => {
  const data = props.data;
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data;

  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date.toString()}</small>
      </div>
    </header>
  );
};

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </ul>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Button = () => (
  <button
    style={{
      padding: "10px 20px",
      background: hexaColor(),
      border: "none",
      borderRadius: 5,
    }}
  >
    {" "}
    action{" "}
  </button>
);

const App = () => {
  const data = {
    welcome: "Welcome to React.js",
    title: "Getting Started React.js",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Shivam",
      lastName: "Mehta",
    },
    date: new Date(),
  };

  return (
    <div className="app">
      <Header data={data} />
      {hexaColor()}
      <Main />
      <Footer />
    </div>
  );
};

root.render(<App />);
