import React, { useEffect, useRef, useState } from "react";
// import VantaJs from "./Vanta";

import headerImage from "../images/headerImage2.png";

import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const Header = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xff0040,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 0,
          backgroundColor: 0x191828,
          points: 8.0,
          maxDistance: 15.0,
          spacing: 15.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);

  return (
    <div className="Header">
      <div className="vanta" ref={vantaRef}>
        {" "}
      </div>
      <div className="Header-Overlay">
        <div className="Header-Overlay-Content">
          <h3>
            Stay updated. <br />
            Stay informed.
          </h3>
          <h1>Crimewatch </h1>
          <p>Directly from police API.</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
