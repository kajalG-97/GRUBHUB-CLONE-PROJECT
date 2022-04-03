import { useParams } from "react-router";

export const RightSide = () => {

    const subtotal = 8.39;
    let tax = subtotal * 0.08;

    let arrow = "<"
    let total = subtotal + tax;

    total.toFixed(2)
    return (<div style={{ flex: "2", height: "100%", border: "1px solid #c3c3c3" }}>

        <h3 style={{ marginLeft: "12px" }}>Your Order from</h3>
        <p style={{ color: "blue", marginLeft: "12px", cursor: "pointer"  }}>7-Eleven</p>

        <hr />

        <div style={{ lineHeight: "1px" }}>
            <div style={{ display: "flex" }}>

                <p style={{ marginLeft: "12px" }} >Items subtotal</p>
                <p style={{ marginLeft: "50%" }} >${subtotal}</p>
            </div>
            <div style={{ display: "flex" }}>

                <p style={{ marginLeft: "12px" }} >Tax</p>
                <p style={{ marginLeft: "69.5%" }} >${tax.toFixed(2)}</p>
            </div>
            <br />
            <div style={{ display: "flex", fontWeight: "bold" }}>

                <p style={{ marginLeft: "12px" }} >Total</p>
                <p style={{ marginLeft: "64%" }} >${total.toFixed(2)}</p>
            </div>
        </div>

        <div style={{ position: "absolute", bottom: "5%", marginLeft: "12px", width: "100%", backgroundColor: "#4792e5", height: "80px", margin: "auto", fontSize: "20px", cursor: "pointer"  }}>


            <p style={{ marginTop: "99%", marginLeft: "12px", width: "100%", backgroundColor: "#4792e5", width: "100%", height: "70px", color: "white", margin: "auto" }}>

                {arrow} Modify you order
            </p>
        </div>


        <div style={{ position: "absolute", bottom: "0", width: "100%", backgroundColor: "#545370", display: "flex", cursor: "pointer" }}>


            <p style={{ width: "100px", color: "white", marginLeft: "20px", fontWeight: "bold", fontSize: "24px" }} >TOTAL </p>
            <p style={{ width: "100px", color: "white", marginLeft: "14%", fontWeight: "bold", fontSize: "24px" }}>${total.toFixed(2)}</p>
        </div>

    </div>
    )
}