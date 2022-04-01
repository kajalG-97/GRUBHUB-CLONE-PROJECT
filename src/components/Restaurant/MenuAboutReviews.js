
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import imageOfMap from "./location.png"

const data = [
  {
    restaurant_name: "House of Steak and Cheese",
    img_url:
      "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_205,h_205,f_auto,fl_lossy,q_80,c_fill/ij4a2kiry4t37untedrm",
    delivery_charge: 1,
    location: "3322 Georgia Ave NW - (571) 475-9319",
    ratings: 5,
    category: "American",
    average_time: 32,
  },
];

const TopBar = () => {
  return (
    <div className="topbar" style={{ marginTop: "15px" }}>
      <button>Menu</button>
      <button>About</button>
      <button>Reviews</button>

      <hr style={{ justifyContent: "center" }} />
    </div>
  );
};


const Chicken = (chickenDishes) => {


  let allChickenDishes = chickenDishes.chickenDishes;

  // console.log(allChickenDishes);

  return (
    <div style={{ marginTop: "-10px" }}>
      <br />
      <h3>Chicken</h3>
      <div style={{
        margin: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "49% 49%",
        gridTemplateRows: "120px 120px",
        gap: "2%",
      }}>{

          allChickenDishes.map((dish) =>

            <div className='items' style={{ border: "1px solid #CCC5E4", width: "100%", display: "flex", borderRadius: "5px" }}>

              <div style={{ justifyContent: "space-between" }}>
                <p style={{ marginLeft: "12px", fontWeight: "bold" }}>{dish.dish_name}</p>

                <p style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}>{dish.description}</p>

              </div>

              <div style={{
                position: "relative"
              }}>

                <img className='itemImg' style={{ marginRight: "12px", marginTop: "12px", height: "100px", }} src={dish.image} alt="" />
                <p className='price'> $ {dish.price}.00+</p>
              </div>


            </div>
          )}
      </div>

    </div>
  )
}

const Smoothies = (smoothiesDishes) => {

  let allSmoothiesDishes = smoothiesDishes.smoothiesDishes;

  // console.log(allSmoothiesDishes);
  return (
    <div>

      <br />
      <h3>Smoothies</h3>
      <div style={{
        margin: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "49% 49%",
        gridTemplateRows: "120px 120px",
        gap: "2%",
      }}>{

          allSmoothiesDishes.map((dish) =>

            <div className='items' style={{ border: "1px solid #CCC5E4", width: "100%", display: "flex", borderRadius: "5px" }}>

              <div style={{ justifyContent: "space-between" }}>
                <p style={{ marginLeft: "12px", fontWeight: "bold" }}>{dish.dish_name}</p>

                <p style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}>{dish.description}</p>

              </div>

              <div style={{
                position: "relative"
              }}>

                <img className='itemImg' style={{ marginRight: "12px", marginTop: "12px", height: "100px", }} src={dish.image} alt="" />
                <p className='price'> $ {dish.price}.00+</p>
              </div>


            </div>
          )}
      </div>
    </div>
  )
}

const Appetizers = (appetizersDishes) => {

  let allAppetizersDishes = appetizersDishes.appetizersDishes;

  // console.log(allAppetizersDishes);
  return (

    <div>
      <br />
      <h3>Appetizers</h3>
      <div style={{
        margin: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "49% 49%",
        gridTemplateRows: "120px 120px",
        gap: "2%",
      }}>{

          allAppetizersDishes.map((dish) =>

            <div className='items' style={{ border: "1px solid #CCC5E4", width: "100%", display: "flex", borderRadius: "5px" }}>

              <div style={{ justifyContent: "space-between" }}>
                <p style={{ marginLeft: "12px", fontWeight: "bold" }}>{dish.dish_name}</p>

                <p style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}>{dish.description}</p>

              </div>

              <div style={{
                position: "relative", float: "right",
              }}>

                <img className='itemImg' style={{ marginRight: "12px", marginTop: "12px", height: "100px", }} src={dish.image} alt="" />
                <p className='price'> $ {dish.price}.00+</p>
              </div>


            </div>
          )}
      </div>
    </div>
  )
}

const FF = (FfDishes) => {

  let allFfDishes = FfDishes.FfDishes;

  // console.log(allFfDishes);

  return (

    <div>
      <br />
      <h3>Fillet fish</h3>
      <div style={{
        margin: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "49% 49%",
        gridTemplateRows: "120px 120px",
        gap: "2%",
      }}>{

          allFfDishes.map((dish) =>

            <div className='items' style={{ border: "1px solid #CCC5E4", width: "100%", display: "flex", borderRadius: "5px" }}>

              <div style={{ justifyContent: "space-between" }}>
                <p style={{ marginLeft: "12px", fontWeight: "bold" }}>{dish.dish_name}</p>

                <p style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}>{dish.description}</p>

              </div>

              <div style={{
                position: "relative"
              }}>

                <img className='itemImg' style={{ marginRight: "12px", marginTop: "12px", height: "100px", }} src={dish.image} alt="" />
                <p className='price'> $ {dish.price}.00+</p>
              </div>


            </div>
          )}
      </div>
    </div>
  )

}

const BFD = (BfdDishes) => {

  let allBfdDishes = BfdDishes.BfdDishes;

  // console.log(allBfdDishes);
  return (
    <div>
      <br />
      <h3>Bone fish dinner</h3>
      <div style={{
        margin: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "49% 49%",
        gridTemplateRows: "120px 120px",
        gap: "2%",
      }}>{

          allBfdDishes.map((dish) =>

            <div className='items' style={{ border: "1px solid #CCC5E4", width: "100%", display: "flex", borderRadius: "5px" }}>

              <div style={{ justifyContent: "space-between" }}>
                <p style={{ marginLeft: "12px", fontWeight: "bold" }}>{dish.dish_name}</p>

                <p style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}>{dish.description}</p>

              </div>

              <div style={{
                position: "relative"
              }}>

                <img className='itemImg' style={{ marginRight: "12px", marginTop: "12px", height: "100px", }} src={dish.image} alt="" />
                <p className='price'> $ {dish.price}.00+</p>
              </div>


            </div>
          )}
      </div>

    </div>
  )
}

const About = (aboutRest) => {

  //indivitual data of one restaurant
  let data2 = aboutRest.aboutRest;

  // console.log(data2);
  return (
    <div style={{}}>
      <h2>{data2.restaurant_name}</h2>
      <p style={{ color: "blue", marginTop: "-10px" }}>{data2.category}</p>
      <p style={{ color: "#d3d3d3", lineHeight: "7px" }}>$$$$$</p>
      <p>
        This restaurant uses their own drivers for delivery. Grubhub charges no
        commission to this restaurant for delivery services.
      </p>
      <div style={{ display: "flex", gap: "2%" }}>
        <div style={{ width: "49%" }}>
          <div
            style={{ height: "70px", border: "1px solid #CCC5E4", width: "100%" }}
          >
            {/* map of */}
            <img style={{ width: "100%", height: "100%" }} src={imageOfMap} alt="Map" />
          </div>
          <p>{data2.location}</p>
          <hr />

          <div style={{ lineHeight: "4px" }}>
            <p>
              <span style={{ float: "left", fontWeight: 400 }}>
                Order assistance
              </span>{" "}
              <span style={{ float: "right", color: "blue" }}>
                (571) 475-9319
              </span>{" "}
            </p>

            <br />
            <br />
            <br />
            <br />

            <p style={{ color: "#7E7283" }}>
              Call to place an order and get help.
            </p>

            <p style={{ color: "#7E7283" }}>
              Grubhub's <span style={{ color: "blue" }}>terms of use</span> and{" "}
              <span style={{ color: "blue" }}>privacy policy</span> apply.
            </p>
            <hr />
          </div>
        </div>

        <div style={{ width: "49%", marginLeft: "12px" }}>
          <h4 style={{ marginLeft: "12px", marginTop: "10px" }}>Hours</h4>

          <p>
            <span
              style={{ float: "left", fontWeight: 400, marginLeft: "12px" }}
            >
              Today
            </span>{" "}
            <span style={{ float: "right", marginRight: "12px" }}>
              Delivery: 12:00pm–2:00am
            </span>{" "}
          </p>

          <br />
          <hr />

          <p style={{ color: "blue", marginLeft: "12px" }}>
            See the full schedule
          </p>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div
      style={{
        height: "250px",
        border: "1px solid black",
      }}
    >
      {data[0].ratings}
    </div>
  );
};

export default function MenuAboutReviews() {


  const [singleData, setSingleData] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://grubhub-backend-clone.herokuapp.com/restaurant/${name}`)
      .then((res) => setSingleData(...res.data));
  }, []);

  const [chicken, setChicken] = useState([]);
  const [smoothies, setSmoothies] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  const [ff, setFf] = useState([]);
  const [bfd, setBfd] = useState([]);

  let linkofChicken = "https://grubhub-backend-clone.herokuapp.com/dish/Chicken";
  let linkofSmoothies = "https://grubhub-backend-clone.herokuapp.com/dish/Smoothies";
  let linkofAppetizers = "https://grubhub-backend-clone.herokuapp.com/dish/Appetizers";
  let linkofFf = "https://grubhub-backend-clone.herokuapp.com/dish/Fillet%20fish";
  let linkofBfd = "https://grubhub-backend-clone.herokuapp.com/dish/Bone%20fish%20dinner";


  const fetchDataChicken = () => {

    return fetch(linkofChicken)
      .then((response) => response.json())
      .then((chicken) => setChicken(chicken))
  }

  const fetchDataSmoothies = () => {

    return fetch(linkofSmoothies)
      .then((res2) => res2.json())
      .then((smoothies) => setSmoothies(smoothies))
  }

  const fetchDataAppetizers = () => {

    return fetch(linkofAppetizers)
      .then((response) => response.json())
      .then((appetizers) => setAppetizers(appetizers))
  }

  const fetchDataFf = () => {

    return fetch(linkofFf)
      .then((response) => response.json())
      .then((ff) => setFf(ff))
  }
  const fetchDataBfd = () => {

    return fetch(linkofBfd)
      .then((response) => response.json())
      .then((bfd) => setBfd(bfd))
  }

  useState(() => {
    fetchDataChicken();
    fetchDataSmoothies();
    fetchDataAppetizers();
    fetchDataFf();
    fetchDataBfd();
  }, [])

  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <TopBar />

      <Chicken chickenDishes={chicken} />

      <Smoothies smoothiesDishes={smoothies} />

      <Appetizers appetizersDishes={appetizers} />

      <FF FfDishes={ff} />

      <BFD BfdDishes={bfd} />

      <About aboutRest={singleData} />

      <Reviews />
    </div>
  );
}
