import { Routes, Route } from "react-router-dom";
import { SignIn } from "../components/LoginSignup/SignIn";
import { SignUp } from "../components/LoginSignup/SignUP";
import { CommonHome } from "../components/CommonHome/CommonHome";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CommonHome />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/create-account" element={<SignUp />} />
      </Routes>
    </>
  );
};
