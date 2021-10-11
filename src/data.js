import {
  MdAirplanemodeActive,
  FaShuttleVan,
  IoMdBoat,
  FaUserGraduate,
} from "react-icons/all";
import React from "react";

const icon_style = {
  fontSize: "3rem",
};

export const topHeaderData = [
  {
    title: "All Freight",
    image: <MdAirplanemodeActive style={icon_style} />,
    url: "/1",
  },
  {
    title: "Sea Freight",
    image: <IoMdBoat style={icon_style} />,
    url: "/2",
  },
  {
    title: `Inland\n(Truck & Barge)`,
    image: <FaShuttleVan style={icon_style} />,
    url: "/3",
  },
  {
    title: `Customs\nClearance`,
    image: <FaUserGraduate style={icon_style} />,
    url: "/4",
  },
];

export const lastLayerData = [
  {
    title: "Export Forwarding",
    body: "We handle customs and documentation",
  },
  {
    title: "Cargo Insurance",
    body: "Protect your cargo from logistics risks up to its full value",
  },
  {
    title: "Import Customs Clearance",
    body: "We handle import customs and regulatory requirements",
  },
  {
    title: "Transport / Delivery",
    body: "We deliver the cargo to your door stepmfrom the ports",
  },
];
