import { Button } from '@mui/material';
import { width } from '@mui/system';
import React, { useRef, useState } from 'react'

const data = [
    {
        restaurant_name: "House of Steak and Cheese",
        img_url: "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/ij4a2kiry4t37untedrm",
        delivery_charge: 1,
        location: "3322 Georgia Ave NW - (571) 475-9319",
        ratings: 5,
        category: "American",
        average_time: 32
    }
];



const TopBar = () => {

    return (
        <div
            className='topbar'
            style={{ marginTop: "15px" }} >

            <button>Menu</button>
            <button>About</button>
            <button>Reviews</button>

            <hr style={{ justifyContent: "center" }} />
        </div>
    )
}

const Menu = (allDishes) => {


    let datafinal = allDishes.allDishes;

    console.log(datafinal);

    // datafinal.filter( (e1) => {
    //     if (e1.category == "chicken") {

    //         console.log(e1)
    //     }
    // })



    return (

        <>
            <div style={{
                marginTop: "15px",
                border: "1px solid red",
            }}
            >

                <div style={{
                    justifyContent: "center",
                    display: "flex",
                    height: "50px",
                    textAlign: "center"
                }}>

                    <p style={{ color: "red" }}>Closed. </p>

                    <p>Next Delivery at 10:00pm.</p>

                    <button style={{
                        textTransform: "none",
                        color: "white",
                        marginLeft: "50px",
                        backgroundColor: "blue",
                        height: "40px",
                        width: "100px",
                        marginTop: "10px",
                        border: "none",
                        padding: "10px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }} variant="contained">Preorder</button>

                </div>
                <hr />

                <h2 style={{ marginTop: "-10px" }}>Appetizers</h2>

                {/* restro items/ food products */}

                <div style={{ marginTop: "0px" }}>


                    {/* <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items /> */}

                </div>




            </div>

            <div style={{
                marginTop: "15px",
                border: "1px solid red",
            }}>

                <h2 style={
                    { marginTop: "-5px" }
                }>Chicken</h2>




                {/* <SideItems />
                <SideItems /> */}


            </div>
        </>


    )
}

const Items = () => {


    return (

        <div style={{ display: "flex", gap: "22px", marginTop: "11px" }} >

            <div className='itemDiv' style={{}}>

                <div style={{ display: "flex", display: "inline-block" }}>

                    <p style={{ fontWeight: "bold", float: "left", marginLeft: "12px" }}>Steak & Cheese</p>
                    <p style={{ fontWeight: "bold", float: "right", marginLeft: "300px" }}>$12.00</p>

                </div>

                <p style={{ marginTop: "0px", marginLeft: "12px", marginRight: "12px", color: "#6B6B83" }}>Ribeye steak dice with onion and pepper smother in mix cheese served on a hogie roll.</p>

            </div>

            <div className='itemDiv' style={{}}>

                <div style={{ display: "flex", display: "inline-block" }}>

                    <p style={{ fontWeight: "bold", float: "left", marginLeft: "12px" }}>Steak & Cheese</p>
                    <p style={{ fontWeight: "bold", float: "right", marginLeft: "300px" }}>$12.00</p>

                </div>

                <p style={{ marginTop: "0px", marginLeft: "12px", marginRight: "12px", color: "#6B6B83" }}>Ribeye steak dice with onion and pepper smother in mix cheese served on a hogie roll.</p>

            </div>

        </div>
    )
}


const SideItems = () => {

    return (
        <div style={{ display: "flex", gap: "22px", marginTop: "11px" }} >

            <div className='itemDiv' style={{ width: "50%" }}>

                <div style={{ display: "flex", display: "inline-block" }}>

                    <p style={{ fontWeight: "bold", float: "left", marginLeft: "12px" }}>Fries</p>
                    <p style={{ fontWeight: "bold", float: "right", marginLeft: "300px" }}>$5.00</p>

                </div>

                <p style={{ marginTop: "0px", marginLeft: "12px", marginRight: "12px", color: "#6B6B83" }}>Fried potatoes.</p>

            </div>

            <div className='itemDiv' style={{ width: "50%" }}>

                <div style={{ display: "flex", display: "inline-block" }}>

                    <p style={{ fontWeight: "bold", float: "left", marginLeft: "12px" }}>Onion Ring</p>
                    <p style={{ fontWeight: "bold", float: "right", marginLeft: "300px" }}>$5.00</p>

                </div>

                <p style={{ marginTop: "0px", marginLeft: "12px", marginRight: "12px", color: "#6B6B83" }}>Fried battered onion.</p>

            </div>

        </div>
    )


}


const About = () => {

    return (


        <div style={{
        }}>
            about

            <h2>{data[0].restaurant_name}</h2>
            <p style={{ color: "blue", marginTop: "-10px" }}>{data[0].category}</p>
            <p style={{ color: "#d3d3d3", lineHeight: "7px" }}>$$$$$</p>

            <p>This restaurant uses their own drivers for delivery. Grubhub charges no commission to this restaurant for delivery services.</p>

            <div style={{ display: "flex", gap: "2%" }}>

                <div style={{ width: "49%" }}>

                    <div style={{ height: "70px", border: "1px solid red", width: "100%" }}>Map of </div>
                    <p>
                        {data[0].location}

                    </p>
                    <hr />

                    <div style={{ lineHeight: "4px" }}>

                        <p><span style={{ float: "left", fontWeight: 400 }}>Order assistance</span> <span style={{ float: "right", color: "blue" }}>(571) 475-9319</span> </p>

                        <br />
                        <br />
                        <br />
                        <br />

                        <p style={{ color: "#7E7283" }}>Call to place an order and get help.</p>

                        <p style={{ color: "#7E7283" }}>Grubhub's <span style={{ color: "blue" }}>terms of use</span> and <span style={{ color: "blue" }}>privacy policy</span> apply.</p>
                        <hr />

                    </div>


                </div>

                <div style={{ width: "49%", marginLeft: "12px" }}>

                    <h4 style={{ marginLeft: "12px", marginTop: "10px" }}>Hours</h4>

                    <p><span style={{ float: "left", fontWeight: 400, marginLeft: "12px" }}>Today</span> <span style={{ float: "right", marginRight: "12px" }}>Delivery: 12:00pm–2:00am</span> </p>


                    <br />
                    <hr />

                    <p style={{ color: "blue", marginLeft: "12px" }} >See the full schedule</p>


                </div>

            </div>

        </div>
    )
}

const Reviews = () => {

    return (

        <div style={{
            height: "250px",
            border: "1px solid black"
        }}>{data[0].ratings}</div>
    )
}

export default function MenuAboutReviews() {



    const [data, setData] = useState([]);

    let linkofApi = "https://grubhub-backend-clone.herokuapp.com/dish";

    const fetchData = () => {

        return fetch(linkofApi)
            .then((response) => response.json())
            .then((data) => setData(data))
    }

    useState(() => {
        fetchData();
    }, [])





    return (
        <div style={{
            width: "80%",
            margin: "auto"
        }}>
            <TopBar />

            <Menu allDishes={data} />
            <About />
            <Reviews />
        </div>
    )
}
