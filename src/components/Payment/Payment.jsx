import { NavSignup } from "../LoginSignup/NavSignup";
import { LeftSide } from "./Leftside";
import { RightSide } from "./Rightside";

//payment page
export const Payment = () => {
  return (
    <div>
      <NavSignup />
      <div
        className="parent"
        style={{ display: "flex", width: "100%", height: "800px" }}
      >
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};
