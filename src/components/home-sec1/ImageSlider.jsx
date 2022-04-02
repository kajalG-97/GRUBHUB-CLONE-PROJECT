import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Img = styled.img`
  cursor: pointer;
  display: block;
  width: 120px;
  height: 120px;
  border-radius:20px;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    backface-visibility: visible;
  }
`;

const Wrapper = styled.header`
  max-width: 100%;
  min-width: 100%;
  position: relative;
  margin: auto;
  /* margin-top: 20px; */
  /* padding: 20px 0; */
  /* background: #fff; */
`;

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    
};


export const Promotions = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        getImage();
    }, []);

    const getImage = () => {
        axios.get(`https://grubhub-backend-clone.herokuapp.com/category`)
            .then((res) => setImage(res.data));
    }
    // console.log("img", image);
    return (
        <Wrapper>
            <div style={{ background: "white", padding: "20px 10px", width: "85%", margin: "auto" }}>
                <div className="container my-3">
                    <Slider {...settings}>
                        {image.map((el) => {

                            return <div key={el.id} className="col" >
                                <Img src={el.image} />
                                <h3>{el.category_name}</h3>
                            </div>
                        })}

                    </Slider>
                </div>
            </div>
        </Wrapper>
    );
}

export default Promotions;
