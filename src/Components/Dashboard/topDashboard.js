import React from "react";
import { BsArrowLeftShort } from "react-icons/all";

const TopDashboard = () => {
  return (
    <div
      className="top-dashboard"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "11%",
        }}
      >
        <BsArrowLeftShort style={{ fontSize: "2rem", paddingRight: "0px" }} />
      </div>
      <div style={{ width: "89%" }}>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginBottom: "15px",
          }}
        >
          New Booking
        </p>
        <p
          style={{
            fontSize: "0.85rem",
            marginBottom: "1.5rem",
            color: "gray",
          }}
        >
          File in the information below to get a quote or a new booking
        </p>
      </div>
    </div>
  );
};

export default TopDashboard;
