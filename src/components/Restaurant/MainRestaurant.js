import React from 'react'
import Navbar from "./Navbar"
import Image from "./Image"
import Restro from "./Restro"
import { Footer } from "../home-sec2/section2"
import MenuAboutReviews from "./MenuAboutReviews"


export default function MainRestaurant() {
    return (
        <div className="App">
            <Navbar />
            <br />
            <Image />
            <Restro />
            <MenuAboutReviews />
            <Footer />
        </div>
    )
}
