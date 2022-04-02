import { useSelector } from "react-redux";
import { ResponsiveAppBar } from "../home-sec1/home-nav";
import { Link } from "react-router-dom";
export const CartPage = () => {
  const data = useSelector((store) => console.log(store.cart));
  return (
    <div>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        <h1>Your Bag is Empty!</h1>
        <Link to={"/home"}>Click here to add somthing to your bag</Link>
        <img
          style={{ height: "500px" }}
          src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?t=st=1648879797~exp=1648880397~hmac=fbe5e3e3480fb12b9802ec00f635ff3bfa296459bdefb569786ec9984fb3d4f3&w=740"
          alt=""
        />
      </div>
    </div>
  );
};
