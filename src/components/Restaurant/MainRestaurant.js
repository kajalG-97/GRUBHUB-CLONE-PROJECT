import React from "react";
import Navbar from "./Navbar";
import Restro from "./Restro";
import { Footer } from "../home-sec2/section2";
import MenuAboutReviews from "./MenuAboutReviews";
import GoToTop from "./GoToTop";

export default function MainRestaurant() {


  return (
    <div className="App">
      <Navbar />
      <br />
      <Restro />
      <MenuAboutReviews />
      <Footer />
      <GoToTop />
    </div>
  );
}
