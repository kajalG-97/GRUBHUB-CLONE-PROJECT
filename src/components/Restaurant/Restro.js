import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./restaurants.css";
import axios from "axios";
import Image from "./Image";

export default function Restro() {


  const [singleData, setSingleData] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios
      .get(`https://grubhub-backend-clone.herokuapp.com/restaurant/${name}`)
      .then((res) => setSingleData(...res.data));
  }, );

  return (
    <>
      <Image url={singleData.img_url} />
      <div className="restro">
        {/* restro name */}
        <h1>{name}</h1>

        <div
          style={{
            display: "flex",
            width: "100%",
            // eslint-disable-next-line no-dupe-keys
            display: "inline-block",
            marginTop: "-20px",
          }}
        >
          {/* address */}
          <p
            style={{
              float: "left",
              color: "grey",
            }}
          >
            {singleData.location}
          </p>

          {/* i button */}
          <img
            style={{
              marginLeft: "15px",
              height: "20px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            src="https://www.svgrepo.com/show/24584/info-icon.svg"
            alt=""
          />

          {/* Start group order */}
          <p
            style={{
              marginLeft: "5px",
              float: "right",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Start group order
          </p>

          {/* group img */}
          <img
            style={{
              float: "right",
              height: "20px",
              marginTop: "15px",
              cursor: "pointer",
            }}
            src="https://cdn1.iconfinder.com/data/icons/facebook-social-media-set/142/facebook_friends-512.png"
            alt=""
          />
        </div>
        <hr
          style={{
            color: "#D3D3D3",
          }}
        />
      </div>
    </>
  );
}
