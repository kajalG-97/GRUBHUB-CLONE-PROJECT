import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import imageOfMap from "./location.png";

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

let LocalArray;

const Chicken = (chickenDishes) => {
  const dispatch = useDispatch();
  // cart function
  const handleCart = (dish) => {
    LocalArray.push(dish);
    localStorage.setItem("cartData", JSON.stringify(LocalArray));
    dispatch(addToCart(dish));
  };
  let allChickenDishes = chickenDishes.chickenDishes;

  return (
    <div style={{ marginTop: "-10px" }}>
      <br />
      <h3>Chicken</h3>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "49% 49%",
          gridTemplateRows: "120px 120px",
          gap: "2%",
        }}
      >
        {allChickenDishes.map((dish) => (
          <div
            className="items"
            style={{
              border: "1px solid #CCC5E4",
              width: "100%",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <div style={{ justifyContent: "space-between" }}>
              <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
                {dish.dish_name}
              </p>

              <p
                style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}
              >
                {dish.description}
              </p>
            </div>
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="itemImg"
                style={{
                  marginRight: "12px",
                  marginTop: "12px",
                  height: "75px",
                }}
                src={dish.image}
                alt=""
              />
              <p className="price"> $ {dish.price}.00+</p>

              <div>
                {/* button */}
                <button className="addCart" onClick={() => handleCart(dish)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Smoothies = (smoothiesDishes) => {
  const dispatch = useDispatch();
  // cart function
  const handleCart = (dish) => {
    LocalArray.push(dish);
    localStorage.setItem("cartData", JSON.stringify(LocalArray));
    dispatch(addToCart(dish));
  };
  let allSmoothiesDishes = smoothiesDishes.smoothiesDishes;

  // console.log(allSmoothiesDishes);
  return (
    <div>
      <br />
      <h3>Smoothies</h3>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "49% 49%",
          gridTemplateRows: "120px 120px",
          gap: "2%",
        }}
      >
        {allSmoothiesDishes.map((dish) => (
          <div
            className="items"
            style={{
              border: "1px solid #CCC5E4",
              width: "100%",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <div style={{ justifyContent: "space-between" }}>
              <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
                {dish.dish_name}
              </p>

              <p
                style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}
              >
                {dish.description}
              </p>
            </div>

            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="itemImg"
                style={{
                  marginRight: "12px",
                  marginTop: "12px",
                  height: "75px",
                }}
                src={dish.image}
                alt=""
              />
              <p className="price"> $ {dish.price}.00+</p>

              <div>
                {/* button */}
                <button className="addCart" onClick={() => handleCart(dish)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Appetizers = (appetizersDishes) => {
  const dispatch = useDispatch();
  // cart function
  const handleCart = (dish) => {
    LocalArray.push(dish);
    localStorage.setItem("cartData", JSON.stringify(LocalArray));
    dispatch(addToCart(dish));
  };
  let allAppetizersDishes = appetizersDishes.appetizersDishes;

  // console.log(allAppetizersDishes);
  return (
    <div>
      <br />
      <h3>Appetizers</h3>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "49% 49%",
          gridTemplateRows: "120px 120px",
          gap: "2%",
        }}
      >
        {allAppetizersDishes.map((dish) => (
          <div
            className="items"
            style={{
              border: "1px solid #CCC5E4",
              width: "100%",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <div style={{ justifyContent: "space-between" }}>
              <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
                {dish.dish_name}
              </p>

              <p
                style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}
              >
                {dish.description}
              </p>
            </div>

            <div
              style={{
                position: "relative",
                float: "right",
              }}
            >
              <img
                className="itemImg"
                style={{
                  marginRight: "12px",
                  marginTop: "12px",
                  height: "75px",
                }}
                src={dish.image}
                alt=""
              />
              <p className="price"> $ {dish.price}.00+</p>

              <div>
                {/* button */}
                <button className="addCart" onClick={() => handleCart(dish)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FF = (FfDishes) => {
  const dispatch = useDispatch();
  // cart function
  const handleCart = (dish) => {
    LocalArray.push(dish);
    localStorage.setItem("cartData", JSON.stringify(LocalArray));
    dispatch(addToCart(dish));
  };
  let allFfDishes = FfDishes.FfDishes;

  // console.log(allFfDishes);

  return (
    <div>
      <br />
      <h3>Fillet fish</h3>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "49% 49%",
          gridTemplateRows: "120px 120px",
          gap: "2%",
        }}
      >
        {allFfDishes.map((dish) => (
          <div
            className="items"
            style={{
              border: "1px solid #CCC5E4",
              width: "100%",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <div style={{ justifyContent: "space-between" }}>
              <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
                {dish.dish_name}
              </p>

              <p
                style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}
              >
                {dish.description}
              </p>
            </div>

            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="itemImg"
                style={{
                  marginRight: "12px",
                  marginTop: "12px",
                  height: "75px",
                }}
                src={dish.image}
                alt=""
              />
              <p className="price"> $ {dish.price}.00+</p>
              <div>
                {/* button */}
                <button className="addCart" onClick={() => handleCart(dish)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const BFD = (BfdDishes) => {
  const dispatch = useDispatch();
  // cart function
  const handleCart = (dish) => {
    LocalArray.push(dish);
    localStorage.setItem("cartData", JSON.stringify(LocalArray));
    dispatch(addToCart(dish));
  };
  let allBfdDishes = BfdDishes.BfdDishes;

  // console.log(allBfdDishes);
  return (
    <div>
      <br />
      <h3>Bone fish dinner</h3>
      <div
        style={{
          margin: "auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "49% 49%",
          gridTemplateRows: "120px 120px",
          gap: "2%",
        }}
      >
        {allBfdDishes.map((dish) => (
          <div
            className="items"
            style={{
              border: "1px solid #CCC5E4",
              width: "100%",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <div style={{ justifyContent: "space-between" }}>
              <p style={{ marginLeft: "12px", fontWeight: "bold" }}>
                {dish.dish_name}
              </p>

              <p
                style={{ margin: "12px", marginTop: "-10px", color: "#6B6B83" }}
              >
                {dish.description}
              </p>
            </div>

            <div
              style={{
                position: "relative",
              }}
            >
              <img
                className="itemImg"
                style={{
                  marginRight: "12px",
                  marginTop: "12px",
                  height: "75px",
                }}
                src={dish.image}
                alt=""
              />
              <p className="price"> $ {dish.price}.00+</p>
              <div>
                {/* button */}
                <button className="addCart" onClick={() => handleCart(dish)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
            style={{
              height: "70px",
              border: "1px solid #CCC5E4",
              width: "100%",
            }}
          >
            {/* map of */}
            <img
              style={{ width: "100%", height: "100%" }}
              src={imageOfMap}
              alt="Map"
            />
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

const Reviews = (aboutRest) => {
  let data2 = aboutRest.aboutRest;

  const [selected, setSelected] = useState("Most Recent");

  function handleChange(event) {
    setSelected(event.target.value);
  }

  // console.log(data2.restaurant_name);
  return (
    <div>
      <h3 style={{ marginLeft: "12px" }}>
        Reviews for {data2.restaurant_name}
      </h3>
      <img
        style={{ height: "45px", marginTop: "-20px" }}
        src="https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg"
        alt=""
      />
      <p
        style={{
          color: "#6B6B83",
          marginTop: "-15px",
          fontSize: "small",
          marginLeft: "12px",
        }}
      >
        48 ratings
      </p>

      <p style={{ fontWeight: "400", fontSize: "smaller", marginLeft: "12px" }}>
        Here's what people are saying:
      </p>

      <div style={{ display: "flex", gap: "24px" }}>
        <div style={{ marginLeft: "12px" }}>
          <p style={{ fontWeight: "bold" }}>87%</p>
          <p
            style={{
              fontSize: "smaller",
              color: "#6B6B83",
              marginTop: "-15px",
            }}
          >
            Food was
          </p>
          <p
            style={{
              fontSize: "smaller",
              color: "#6B6B83",
              marginTop: "-15px",
            }}
          >
            good
          </p>
        </div>

        <div style={{ marginLeft: "12px" }}>
          <p style={{ fontWeight: "bold" }}>94%</p>
          <p
            style={{
              fontSize: "smaller",
              color: "#6B6B83",
              marginTop: "-15px",
            }}
          >
            Delivery{" "}
          </p>
          <p
            style={{
              fontSize: "smaller",
              color: "#6B6B83",
              marginTop: "-15px",
            }}
          >
            was on time
          </p>
        </div>

        <div style={{ marginLeft: "12px" }}>
          <p style={{ fontWeight: "bold" }}>88%</p>
          <p
            style={{
              fontSize: "smaller",
              color: "#6B6B83",
              marginTop: "-15px",
            }}
          >
            Order was
          </p>
          <p
            style={{
              fontSize: "smaller",
              color: "#6B6B83",
              marginTop: "-15px",
            }}
          >
            accurate
          </p>
        </div>
      </div>
      <hr />

      {/* sort select tag */}
      <div style={{ textAlign: "right", marginRight: "12px" }}>
        <label style={{ color: "#6B6B83" }}>
          Sort by:
          <select
            style={{ padding: "8px", marginLeft: "15px", borderRadius: "5px" }}
            value={selected}
            onChange={handleChange}
          >
            <option value="mostrecent">Most recent</option>
            <option value="highest">Highest rated</option>
          </select>
        </label>
      </div>

      {/* reviews  */}

      {/* first */}
      <div style={{ display: "flex", height: "60px" }}>
        <img
          style={{ height: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eo_circle_light-blue_white_letter-r.svg/1200px-Eo_circle_light-blue_white_letter-r.svg.png"
          alt=""
        />
        <div style={{ marginLeft: "10px" }}>
          <p style={{ marginTop: "0px", fontWeight: "bold" }}>Renay</p>
          <div style={{ display: "flex" }}>
            <img
              style={{ height: "15px", marginTop: "-10px" }}
              src="https://birthambassadors.files.wordpress.com/2014/06/smooth-star.jpg"
              alt=""
            />
            <p
              style={{
                height: "15px",
                marginTop: "-12px",
                marginLeft: "12px",
                color: "#6B6B83",
                fontSize: "smaller",
              }}
            >
              4 reviews
            </p>
          </div>
        </div>

        <p
          style={{ marginLeft: "850px", color: "#6B6B83", fontSize: "smaller" }}
        >
          Sep 14, 2021
        </p>
      </div>

      {/* with / after 3 stars */}

      <img
        style={{ height: "50px", marginTop: "-10px" }}
        src="https://st3.depositphotos.com/20148636/32849/v/950/depositphotos_328493216-stock-illustration-star-rating-vector-isolated-golden.jpg?forcejpeg=true"
        alt=""
      />

      <p style={{ marginLeft: "12px", marginTop: "-10px" }}>
        The food was good however sandwich was soggyyet still tasty
      </p>

      <p style={{ color: "#6B6B83", fontSize: "smaller", marginLeft: "12px" }}>
        Renay ordered:
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginLeft: "12px",
          height: "32px",
        }}
      >
        <div
          className="reviewItems"
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            backgroundColor: "#F2F2F2",
            width: "180px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          {data2.restaurant_name}'s Toast+{" "}
        </div>
        <div
          className="reviewItems"
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            backgroundColor: "#F2F2F2",
            width: "180px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          Build Your Breakfast +{" "}
        </div>
        <div
          className="reviewItems"
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            backgroundColor: "#F2F2F2",
            width: "180px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          Crispy Chicken Sandw..+{" "}
        </div>
      </div>
      <br />

      {/* second */}
      <div style={{ display: "flex", height: "60px" }}>
        <img
          style={{ height: "50px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Eo_circle_light-blue_letter-g.svg/1200px-Eo_circle_light-blue_letter-g.svg.png"
          alt=""
        />
        <div style={{ marginLeft: "10px" }}>
          <p style={{ marginTop: "0px", fontWeight: "bold" }}>German</p>
          <div style={{ display: "flex" }}>
            <img
              style={{ height: "15px", marginTop: "-10px" }}
              src="https://birthambassadors.files.wordpress.com/2014/06/smooth-star.jpg"
              alt=""
            />
            <p
              style={{
                height: "15px",
                marginTop: "-12px",
                marginLeft: "12px",
                color: "#6B6B83",
                fontSize: "smaller",
              }}
            >
              2 reviews
            </p>
          </div>
        </div>

        <p
          style={{ marginLeft: "850px", color: "#6B6B83", fontSize: "smaller" }}
        >
          Aug 20, 2021
        </p>
      </div>

      {/* with / after 3 stars */}

      <img
        style={{ height: "30px", marginTop: "-10px" }}
        src="https://t4.ftcdn.net/jpg/03/69/04/01/360_F_369040116_CCwMAKzk0u6R60lLhNS4LDlOGL4bXilZ.jpg"
        alt=""
      />

      <p style={{ marginLeft: "12px", marginTop: "-1px" }}>
        Best damn food omg
      </p>

      <p style={{ color: "#6B6B83", fontSize: "smaller", marginLeft: "12px" }}>
        German ordered:
      </p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          marginLeft: "12px",
          height: "32px",
        }}
      >
        <div
          className="reviewItems"
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            backgroundColor: "#F2F2F2",
            width: "180px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          {data2.restaurant_name} Toast+{" "}
        </div>
        <div
          className="reviewItems"
          style={{
            cursor: "pointer",
            whiteSpace: "nowrap",
            backgroundColor: "#F2F2F2",
            width: "180px",
            borderRadius: "3px",
            textAlign: "center",
          }}
        >
          Canned Soda +{" "}
        </div>
      </div>

      <hr />
    </div>
  );
};

export default function MenuAboutReviews() {
  const [singleData, setSingleData] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://grubhub-backend-clone.herokuapp.com/restaurant/${name}`)
      .then((res) => setSingleData(...res.data))
      .finally(() => {
        LocalArray = JSON.parse(localStorage.getItem("cartData")) || [];
      });
  }, []);

  const [chicken, setChicken] = useState([]);
  const [smoothies, setSmoothies] = useState([]);
  const [appetizers, setAppetizers] = useState([]);
  const [ff, setFf] = useState([]);
  const [bfd, setBfd] = useState([]);

  let linkofChicken =
    "https://grubhub-backend-clone.herokuapp.com/dish/Chicken";
  let linkofSmoothies =
    "https://grubhub-backend-clone.herokuapp.com/dish/Smoothies";
  let linkofAppetizers =
    "https://grubhub-backend-clone.herokuapp.com/dish/Appetizers";
  let linkofFf =
    "https://grubhub-backend-clone.herokuapp.com/dish/Fillet%20fish";
  let linkofBfd =
    "https://grubhub-backend-clone.herokuapp.com/dish/Bone%20fish%20dinner";

  const fetchDataChicken = () => {
    return fetch(linkofChicken)
      .then((response) => response.json())
      .then((chicken) => setChicken(chicken));
  };

  const fetchDataSmoothies = () => {
    return fetch(linkofSmoothies)
      .then((res2) => res2.json())
      .then((smoothies) => setSmoothies(smoothies));
  };

  const fetchDataAppetizers = () => {
    return fetch(linkofAppetizers)
      .then((response) => response.json())
      .then((appetizers) => setAppetizers(appetizers));
  };

  const fetchDataFf = () => {
    return fetch(linkofFf)
      .then((response) => response.json())
      .then((ff) => setFf(ff));
  };
  const fetchDataBfd = () => {
    return fetch(linkofBfd)
      .then((response) => response.json())
      .then((bfd) => setBfd(bfd));
  };

  useState(() => {
    fetchDataChicken();
    fetchDataSmoothies();
    fetchDataAppetizers();
    fetchDataFf();
    fetchDataBfd();
  }, []);

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

      <Reviews aboutRest={singleData} />
    </div>
  );
}
