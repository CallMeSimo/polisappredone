import React from "react";

import githubSvg from "../images/github.svg";
import linkedin from "../images/linkedin.svg";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavbarContent">
        <div className="Logo">
          <h2>CrimeWatch</h2>
        </div>
        <div className="sources">
          <a href="https://github.com/CallMeSimo">
            <img src={githubSvg} />
          </a>
          <a href="https://www.linkedin.com/in/wassim-el-haddaoui/">
            <img src={linkedin} />
          </a>
          <a href="https://simoportfolio.com/">
            <span>Portfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
