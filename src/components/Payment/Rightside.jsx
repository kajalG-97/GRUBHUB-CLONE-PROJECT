import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export const RightSide = () => {
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const array = JSON.parse(localStorage.getItem("cartData")) || [];
        setCartData(array);
    };
    let subtotal = 0;

    cartData.map((singleData) => {
        subtotal += singleData.price;
    });
    // const subtotal = 8.39;
    let tax = subtotal * 0.08;

    let arrow = "<";
    let total = subtotal + tax;

    total.toFixed(2);
    return (
        <div
            style={{
                flex: "2",
                height: "90%",
                border: "1px solid #c3c3c3",
                width: "33%",
                marginTop: "70px",
                top: 0,
                right: 0,
                bottom: 0,
                position: "fixed",
                overflowY: "hidden",
                overflowY: "hidden",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
        >
            <h3 style={{ marginLeft: "12px" }}>Your Order from</h3>
            <p style={{ color: "blue", marginLeft: "12px", cursor: "pointer" }}>
                7-Eleven
            </p>

            <hr style={{ color: "#c3c3c3" }} />

            <div style={{ lineHeight: "1px" }}>
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: "12px" }}>Items subtotal</p>
                    <p style={{ marginLeft: "57%" }}>${subtotal}</p>
                </div>
                <div style={{ display: "flex" }}>
                    <p style={{ marginLeft: "12px" }}>Tax</p>
                    <p style={{ marginLeft: "69.5%" }}>${tax.toFixed(2)}</p>
                </div>
                <br />
                <div style={{ display: "flex", fontWeight: "bold" }}>
                    <p style={{ marginLeft: "12px" }}>Total</p>
                    <p style={{ marginLeft: "65.5%" }}>${total.toFixed(2)}</p>
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "5%",
                    marginLeft: "12px",
                    width: "100%",
                    backgroundColor: "#4792e5",
                    height: "80px",
                    margin: "auto",
                    fontSize: "20px",
                    cursor: "pointer",
                }}
            >
                <p
                    style={{
                        marginTop: "99%",
                        marginLeft: "12px",
                        width: "100%",
                        backgroundColor: "#4792e5",
                        width: "100%",
                        height: "70px",
                        color: "white",
                        margin: "auto",
                    }}
                >
                    {arrow} Modify you order
                </p>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                    backgroundColor: "#545370",
                    display: "flex",
                    cursor: "pointer",
                }}
            >
                <p
                    style={{
                        width: "100px",
                        color: "white",
                        marginLeft: "20px",
                        fontWeight: "bold",
                        fontSize: "24px",
                    }}
                >
                    TOTAL{" "}
                </p>
                <p
                    style={{
                        width: "100px",
                        color: "white",
                        marginLeft: "50%",
                        fontWeight: "bold",
                        fontSize: "24px",
                    }}
                >
                    ${total.toFixed(2)}
                </p>
            </div>
        </div>
    );
};
