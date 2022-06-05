import "./component-style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home-bg">
      <div className="container d-flex flex-column h-100 justify-content-center align-items-center">
        <div className="row text-light">
          <h1 className="">Welcome</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
