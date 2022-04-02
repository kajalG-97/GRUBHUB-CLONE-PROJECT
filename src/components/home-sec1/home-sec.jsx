import { DarkDiv } from "./DD";
import { ResponsiveAppBar } from "./home-nav";
import { SearchBackgroundDiv } from "./SearchBackgroundDiv";
import { Promotions } from "./ImageSlider";

export const HomeSection = () => {
  return (
    <>
      <ResponsiveAppBar />
      <SearchBackgroundDiv />
      <DarkDiv />
      {/* <Promotions/> */}
    </>
  );
};
