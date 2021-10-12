import React from "react";
import Card from "../UI/Card";
import InnerCard from "../UI/InnerCard";
import ButtonSwitch from "../Constant/Switch/switch";
import { topHeaderData, lastLayerData } from "../../data";
import "./index.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import {
  ImLocation,
  AiFillCalendar,
  IoIosInformationCircleOutline,
  BsArrowLeftShort,
} from "react-icons/all";

const TopDashboard = () => {
  return (
    <div className="top_dashboard">
      <div className="top_dashboard_left">
        <BsArrowLeftShort style={{ fontSize: "2rem", paddingRight: "0px" }} />
      </div>
      <div className="top_dashboard_right">
        <p>New Booking</p>
        <p>File in the information below to get a quote or a new booking</p>
      </div>
    </div>
  );
};

const SecondLayer = () => {
  return (
    <>
      <IoIosInformationCircleOutline />

      <div className="second_layer_top">
        <div className="second_layer_top_l">
          <button>Import</button>
          <button>Export</button>
        </div>
        <div className="second_layer_top_r">
          <label>
            <ImLocation />
            <input type="text" placeholder="From City or port" />
          </label>
          <label>
            <ImLocation />
            <input type="text" placeholder="To City or port" />
          </label>
        </div>
      </div>
      <div className="second_layer_bottom">
        <label>
          <AiFillCalendar />
          <input
            type="date"
            // onClick="$(this).removeClass('placeholderclass')"
            id="date"
            placeholder="Ready Date"
            className="calendar_input"
          />
        </label>
        <label>
          <select type="text" placeholder="Incoterms">
            <option disabled hidden selected>
              Incoterms
            </option>
            <option>To City or port</option>
          </select>
        </label>
        <label>
          <input type="text" placeholder="Total Cargo Value" />
        </label>
      </div>
    </>
  );
};

const ThirdLayer = () => {
  const location = useLocation();

  const getActive = (currentLocation) => {
    if (location.pathname === currentLocation) {
      return {
        backgroundColor: "#FFF",
        color: "#0c0c7a",
      };
    } else {
      return {
        backgroundColor: "transparent",
        color: "rgb(192, 189, 189)",
      };
    }
  };
  return (
    <>
      <label className="details_option">
        <Link to="/" style={getActive("/")} className="details_links">
          Total Dimensions
        </Link>
        <Link to="/." style={getActive("/.")} className="details_links">
          Package Details
        </Link>
      </label>

      <div className="detail_options_styled_input">
        <label className="options_field">
          <input type="text" id="total_vol" />
          <label htmlFor="total_vol" className="placeholder">
            Total Volume
          </label>
          <p>Cbm</p>
        </label>
        <label className="options_field">
          <input type="text" id="total_weight" />
          <label htmlFor="total_weight" className="placeholder">
            Total Weight
          </label>
          <p>Kg</p>
        </label>
      </div>
    </>
  );
};

const LastLayer = () => {
  return (
    <div className="dashboard_last_layer_container">
      {lastLayerData.map((data, index) => (
        <div className="dashboard_last__layer_container_inner" key={index}>
          <div className="btn_switch">
            <ButtonSwitch checkChecked={false} />
          </div>
          <div>
            <p className="dashboard_last__layer_container_inner_lg_p">
              {data.title}
            </p>
            <p className="dashboard_last__layer_container_inner_sm_p">
              {data.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TopDashboard />

      <Card
        card_header={<p>Select a service</p>}
        card_body={<InnerCard data={topHeaderData} />}
      />
      <Card card_title="icon" card_body={<SecondLayer />} />
      <Card
        card_header={
          <div>
            <div className="card_header">
              <p>Cargo Details</p>{" "}
              <div className="card_header_right">
                <ButtonSwitch checkChecked={true} />
                <p>Dangerous Cargo (ex. Chemicals, Battery</p>
              </div>
            </div>
          </div>
        }
        card_body={<ThirdLayer />}
      />
      <Card
        card_header={<p>Additional Services</p>}
        card_body={<LastLayer />}
      />
    </div>
  );
};
export default Dashboard;
