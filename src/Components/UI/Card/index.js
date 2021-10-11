import React from "react";
import "./index.css";
import PropTypes from "prop-types";

const Card = ({ card_header, card_body }) => {
  return (
    <div className="dashboard_card">
      <div className="dashboard_card_header">{card_header}</div>
      <div className="card_body">{card_body}</div>
    </div>
  );
};

Card.propTypes = {
  card_header: PropTypes.any,
  card_body: PropTypes.node,
};
export default Card;
