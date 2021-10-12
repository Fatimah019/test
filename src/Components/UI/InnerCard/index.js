import React, { useState } from "react";
import "./index.css";
import PropTypes from "prop-types";

const InnerCard = ({ data }) => {
  const [selected, setSelected] = useState(0);

  const handleColor = (row) => {
    setSelected(row);
  };

  return (
    <div className="inner_card_container">
      {data &&
        data.map((list, index) => (
          <div
            className="inner_card"
            key={index}
            onClick={() => handleColor(index)}
            style={{
              backgroundColor:
                index === selected ? "var(--active-bg-color)" : "",
              color:
                index === selected ? "var(--active-text-color)" : "#81868c",
              border:
                index === selected
                  ? "1px solid var(--active-bg-color)"
                  : "1px solid #d0d5d9",
            }}
          >
            <p className="card_title">{list.title}</p>
            <div className="card_icon">
              <div className="card_icon_inner">{list.image}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

InnerCard.propTypes = {
  card_title: PropTypes.any,
  card_image: PropTypes.any,
};
export default InnerCard;
