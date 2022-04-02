import React from "react";
import "./restaurants.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  
  let userName = "Shubham";
  const { name } = useParams();
  const [val, setVal] = useState("");
  
  useEffect(() => {
    axios
    .get(`https://grubhub-backend-clone.herokuapp.com/restaurant/${name}`)
    .then((res) => setVal(res.data[0].location));
  }, []);
  
  
  console.log('val', val);


  return (
    <div className="navbar">
      <ui style={{ display: "flex" }}>
        {/* logo */}
        <img
          style={{ marginLeft: "35px", height: "70px" }}
          src="https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png"
          alt=""
        />

       
        <img src="https://img.icons8.com/windows/300/place-marker.png" style={{ marginLeft: "35px",marginTop:"13px", height: "40px" }}/>
        <p style={{ marginLeft: "8px", marginTop: "25px", color: "blue" }}>
          {val}
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

      <hr style={{ marginTop: "-10px" }} />
    </div>
  );
}
