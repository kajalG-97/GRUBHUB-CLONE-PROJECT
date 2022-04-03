import { Routes, Route } from "react-router-dom";
import { SignIn } from "../components/LoginSignup/SignIn";
import { SignUp } from "../components/LoginSignup/SignUP";
import { CommonHome } from "../components/CommonHome/CommonHome";
import { MainHomePage } from "../components/MainHome/MainHomePage";
import { CartPage } from "../components/Cart/CartPage";
import MainRestaurant from "../components/Restaurant/MainRestaurant";
import { NotFound } from "../components/NotFound/NotFound";
import { Payment } from "../components/Payment/Payment";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CommonHome />} />
        <Route exact path="/Login" element={<SignIn />} />
        <Route exact path="/create-account" element={<SignUp />} />
        <Route exact path="/home" element={<MainHomePage />} />
        <Route exact path="/restaurant/:name" element={<MainRestaurant />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
