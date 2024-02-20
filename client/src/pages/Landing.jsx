import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import img from "../assets/images/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            quod veniam dignissimos magnam. Veniam facilis quos aliquam totam
            reiciendis porro, nulla sit, odio ullam saepe, voluptatibus
            necessitatibus quisquam cumque inventore!
          </p>
          <Link to="/register" className="btn register-link">
            register
          </Link>
          <Link to="/login" className="btn register-link">
            login / demo
          </Link>
        </div>
        <img src={img} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
