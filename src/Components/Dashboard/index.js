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
} from "react-icons/all";
import TopDashboard from "./topDashboard";

const SecondLayer = () => {
  return (
    <div>
      <div className="third_layer_top">
        <div className="third_layer_top_l">
          <button>Import</button>
          <button>Export</button>
        </div>
        <div className="third_layer_top_r">
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
      <div className="third_layer_bottom">
        <label>
          <AiFillCalendar />
          <input
            type="text"
            onfocus="(this.type='date')"
            onblur="(this.type='text')"
            id="date"
            placeholder="Ready Date"
          />
        </label>
        <label>
          <select type="text" placeholder="To City or port">
            <option value="" disabled selected hidden>
              Incoterms
            </option>
            <option>To City or port</option>
          </select>
        </label>
        <label>
          <input type="text" placeholder="Total Cargo Value" />
        </label>
      </div>
    </div>
  );
};

const ThirdLayer = () => {
  console.log(useLocation().pathname);
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
    <div>
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
          <label for="total_vol" className="placeholder">
            Total Volume
          </label>
          <p>Cbm</p>
        </label>
        <label className="options_field">
          <input type="text" id="total_weight" />
          <label for="total_weight" className="placeholder">
            Total Weight
          </label>
          <p>Kg</p>
        </label>
      </div>
    </div>
  );
};

const LastLayer = () => {
  return (
    <div className="dashboard_last_layer_container">
      {lastLayerData.map((data, index) => (
        <div className="dashboard_last__layer_container_inner" key={index}>
          <div className="btn_switch">
            <ButtonSwitch />
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
            <IoIosInformationCircleOutline />
            <div className="card_header">
              <p>Cargo Details</p>{" "}
              <div className="card_header_right">
                <ButtonSwitch />
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
