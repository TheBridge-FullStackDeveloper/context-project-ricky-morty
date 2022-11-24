import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <nav>
        <span>Wachi Online Shop</span>
        <div>
            <Link to="/"><span>Home</span></Link>
            <Link to="/contact"><span>Contact</span></Link>
        </div>
      </nav>
      {/* <div className="box2">
        hola
      </div>
      <div className="message">Message</div>
      <div className="success">Message success</div> */}
    </>
  );
};

export default Header;
