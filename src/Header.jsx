import React from "react";

import headerImage from "./images/headerImage2.png";
import overlaybackground from "./images/overlaybackground.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={headerImage} />
      <div className="Header-Overlay">
        <h2>Stay updated. Stay informed.</h2>
        <div>
          <h1>Crimewatch </h1>
          <p>Directly from police API.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
