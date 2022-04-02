import React from "react";
import { useState } from "react";
import restaurant_data from "./restaurant_data.json";
import popular_data from "./Popular_data.json";
import National from "./National.json";
import Delicious from "./Delicious.json";
import { Link } from "react-router-dom";

import styled from "styled-components";

const IMG = styled.img`
  cursor: pointer;

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;


// popular_data
export const Section2 = () => {
  return (
    <div>
      <h2 className="heading">Popular Near You</h2>
      <div className="restaurant_data">
        {popular_data.map((resto) => {
          return (
            <Link
              to={`/restaurant/${resto.restaurant_name}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="resto">
                <IMG src={resto.img_url} alt="" />
                <h3 className="title">{resto.restaurant_name}</h3>
                <div className="charges">
                  Delivery Charge: ${resto.delivery_charge}
                </div>
                <div>
                  <span className="flag">
                    <IMG
                      src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577660727/subscriptions/flag_oyyevx.svg"
                      alt=""
                    />
                  </span>
                  <span className="category">{resto.category}</span>
                </div>
                <div className="location">{resto.location}</div>

                <div className="merg">
                  <span className="distance">{resto.average_time}Min</span>
                  <span className="rating">
                    Rating : {resto.ratings}
                    <span className="star">★</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export const Section3 = () => {
  return (
    <div>
      <h2 className="heading">National Picks</h2>
      <div className="restaurant_data">
        {National.map((resto) => {
          return (
            <Link
              to={`/restaurant/${resto.restaurant_name}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="resto">
                <IMG src={resto.img_url} alt="" />
                <h3 className="title">{resto.restaurant_name}</h3>
                <div className="charges">
                  Delivery Charge: ${resto.delivery_charge}
                </div>
                <div>
                  <span className="flag">
                    <IMG
                      src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577660727/subscriptions/flag_oyyevx.svg"
                      alt=""
                    />
                  </span>

                  <span className="category">{resto.category}</span>
                </div>
                <div className="location">{resto.location}</div>

                <div className="merg">
                  <span className="distance">{resto.average_time}Min</span>
                  <span className="rating">
                    Rating : {resto.ratings}
                    <span className="star">★</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export const Section4 = () => {
  return (
    <div>
      <h2 className="heading">Delisious Deal</h2>
      <div className="restaurant_data">
        {Delicious.map((resto) => {
          return (
            <Link
              to={`/restaurant/${resto.restaurant_name}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="resto">
                <IMG src={resto.img_url} alt="" />
                <h3 className="title">{resto.restaurant_name}</h3>
                <div className="charges">
                  Delivery Charge: ${resto.delivery_charge}
                </div>
                <div>
                  <span className="flag">
                    <IMG
                      src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577660727/subscriptions/flag_oyyevx.svg
"
                      alt=""
                    />
                  </span>

                  <span className="category">{resto.category}</span>
                </div>
                <div className="location">{resto.location}</div>

                <div className="merg">
                  <span className="distance">{resto.average_time}Min</span>
                  <span className="rating">
                    Rating : {resto.ratings}
                    <span className="star">★</span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export const Section5 = () => {
  const [noOfElement, setNoOfElement] = useState(16);

  const seeMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };

  const slice = restaurant_data.slice(0, noOfElement);

  return (
    <div className="margin">
      <div>
        <h2 className="heading">All Restaurant</h2>
        <div className="restaurant_data">
          {slice.map((resto) => {
            return (
              <Link
                to={`/restaurant/${resto.restaurant_name}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="resto">
                  <img src={resto.img_url} alt="" />
                  <h3 className="title">{resto.restaurant_name}</h3>
                  <div className="charges">
                    Delivery Charge: ${resto.delivery_charge}
                  </div>
                  <div>
                    <span className="flag">
                      <img
                        src="https://res.cloudinary.com/grubhub-assets/image/upload/v1577660727/subscriptions/flag_oyyevx.svg"
                        alt=""
                      />
                    </span>
                    <span className="category">{resto.category}</span>
                  </div>
                  <div className="location">{resto.location}</div>

                  <div className="merg">
                    <span className="distance">{resto.average_time}Min</span>
                    <span className="rating">
                      Rating : {resto.ratings}
                      <span className="star">★</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="btn">
        <button id="btn" onClick={() => seeMore()}>
          See More
        </button>
      </div>
    </div>
  );
};
export const Section6 = () => {
  return (
    <div className="flex">
      <div className="left-side">
        <h2>Give the gift of food delivery</h2>
        <p>Perfect for birthdays, holidays, Thank You’s and more.</p>
        <button>Order Grhubhub Gift Cards</button>
      </div>
      <div className="cards">
        <img
          src="https://res.cloudinary.com/grubhub-marketing/image/upload/f_auto,fl_lossy/v1628714840/HERMES/CITRUS/ACQ-20181212-Gift-Card-IMF-Banner-Citrus/New-TYPage-Banner3-GH-Resize-Citrus.png"
          alt=""
        />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <div className="grid">
        <div>
          <h3>Get to know us</h3>
          <ul>
            <li>About Grubhub</li>
            <li>Our apps</li>
            <li>Our blog</li>
            <li>Careers</li>
            <li>Investor relations</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <h3>Useful links </h3>
          <ul>
            <li>Gift cards</li>
            <li>Grubhub Perks</li>
            <li>Grubhub+</li>
            <li>Grubhub Guarantee</li>
            <li>Help</li>
            <li>Catering</li>
            <li>Keyboard Shortcuts</li>
            <li>Answers</li>
          </ul>
        </div>
        <div>
          <h3>Connect with us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div>
          <h3>Partner with us</h3>
          <ul className="box">
            <li>For Restaurants</li>
            <li>For Drivers</li>
            <li>For Corporate Account</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="end">
        <div className="petent">© 2022 Grubhub All rights reserved.</div>
        <div className="ended">
          <ul>
            <li>Terms of Use</li>
            <li>CA Privacy Notice</li>
          </ul>
        </div>
        <div className="yet">
          <ul>
            <li>Privacy Policy</li>
            <li>Do Not Sell My Information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
