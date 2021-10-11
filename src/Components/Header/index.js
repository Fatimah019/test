import React from "react";
import "./index.css";
import { FaSearch } from "react-icons/fa";

const Header = () => {
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
      <div className="header_right">
        <a href="/" className="quote_link">
          Request Quote
        </a>
        <a href="/" className="shipment_link">
          Book Shipment
        </a>
      </div>
    </header>
  );
};

export default Header;
