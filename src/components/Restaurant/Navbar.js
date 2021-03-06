import React from "react";
import "./restaurants.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Navbar() {

  const navigate = useNavigate();

  const authentication = useSelector((store) => store.login.login);

  const { name } = useParams();
  const [val, setVal] = useState("");

  useEffect(() => {
    axios
      .get(`https://grubhub-backend-clone.herokuapp.com/restaurant/${name}`)
      .then((res) => setVal(res.data[0].location));
  }, []);

  console.log("val", val);

  return (
    <div className="navbar">
      <ui style={{ display: "flex" }}>
        {/* logo */}
        <img
          src="https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png"
          alt=""
          style={{ width: "130px", height: "60px", marginLeft: "25px" }}
          onClick={() => navigate("/home")}
        />
        <img
          src="https://img.icons8.com/windows/300/place-marker.png"
          style={{ marginLeft: "35px", marginTop: "13px", height: "40px" }}
          alt=""
        />
        <div>
          <p style={{ marginLeft: "8px", marginTop: "25px", color: "blue", width: "200px" }}>
            {val}
          </p>
        </div>
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
        <Button
          key={"Hi! Kajal"}

          sx={{ my: 2, marginLeft: "25%", color: "black", display: "block", width: "100px", whiteSpace: "nowrap" }}
        >
          Hi! {authentication}
        </Button>

        <ShoppingBagIcon
          onClick={() => navigate("/cart")}
          sx={{ color: "black", marginRight: "2px", marginTop: "20px", marginLeft: "3%" }}
        />
      </ui>
      <hr style={{ marginTop: "-5px" }} />
    </div>
  );
}
