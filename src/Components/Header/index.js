import React, { useState } from "react";
import "./index.css";
import { FaSearch, FaBars, AiOutlineClose } from "react-icons/all";

const Header = () => {
  const [showNavmenu, setShowNavmenu] = useState(false);
  const [showopenicon, setShowopenicon] = useState(true);

  const handleNavBar = () => {
    setShowNavmenu(true);
    setShowopenicon(false);
  };

  const closeNavMenu = () => {
    setShowNavmenu(false);
    setShowopenicon(true);
  };

  const style = showNavmenu ? { display: "block" } : {};

  return (
    <header>
      <div className="header_left">
        <h2 style={{ fontSize: "1.1rem" }}>send</h2>
        <span style={{ fontSize: "0.7rem" }}>FREIGHT</span>
        <label className="header_left_search">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </label>
      </div>
      <div style={style} className="header_right_desktop">
        <div>
          <a href="/" className="quote_link">
            Request Quote
          </a>
          <a href="/" className="shipment_link">
            Book Shipment
          </a>
        </div>
      </div>
      <div className="header_right_mobile">
        {showopenicon ? (
          <FaBars onClick={handleNavBar} style={{ fontSize: "2rem" }} />
        ) : (
          <AiOutlineClose onClick={closeNavMenu} style={{ fontSize: "2rem" }} />
        )}
      </div>
    </header>
  );
};

export default Header;
