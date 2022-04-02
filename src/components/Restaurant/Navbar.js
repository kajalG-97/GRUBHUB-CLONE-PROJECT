import React from "react";
import "./restaurants.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
export default function Navbar() {
  const navigate = useNavigate();
  let location = "sdfghhhhhjk";
  let userName = "Shubham";

  return (
    <div className="navbar">
      <ui style={{ display: "flex" }}>
        {/* logo */}
        <img
          style={{ marginLeft: "35px", height: "64px" }}
          src="https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png"
          alt=""
        />

        {/* position img */}
        {/* <img
          style={{ marginLeft: "35px", height: "25px", marginTop: "25px" }}
          src="https://w7.pngwing.com/pngs/258/544/png-transparent-location-logo-location-duke-university-logo-information-blue-earth-blue-plan-time.png"
          alt=""
        /> */}
        <Button
          key={"Hi! Kajal"}

          sx={{ my: 2, color: "black", display: "block" }}
        >
          location
        </Button>

        {/* location */}
        <p style={{ marginLeft: "8px", marginTop: "25px", color: "blue" }}>
          {location}
        </p>

        {/* searchbox */}
        <input
          style={{
            border: "1px solid #696969",
            marginLeft: "35px",
            width: "350px",
            height: "35px",
            marginTop: "15px",
            borderRadius: "5px",
          }}
          type="text"
          placeholder="    Search Grubhub"
        />

        {/* username */}
        <p style={{ marginLeft: "400px", height: "45px", marginTop: "20px" }}>
          Hi, {userName}!
        </p>

        {/* downarrow */}
        <img
          style={{ marginLeft: "8px", height: "25px", marginTop: "17px" }}
          src="https://www.cet1886.org/wp-content/themes/Eldo/images/down-arrow.svg"
          alt=""
        />

        {/* bagImg */}
        <img
          onClick={() => navigate("/cart")}
          style={{ marginLeft: "35px", height: "35px", marginTop: "12px" }}
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/office-bag-1970004-1662960.png"
          alt=""
        />
      </ui>

      <hr style={{marginTop: "-17.5px",}} />
    </div>
  );
}
