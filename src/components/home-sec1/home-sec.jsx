import { DarkDiv } from "./DD";
import { ResponsiveAppBar } from "./home-nav";
import { SearchBackgroundDiv } from "./SearchBackgroundDiv";
import { Bouncing } from "./SearchBar";

export const HomeSection = () => {
  return (
    <>
      <ResponsiveAppBar />
      <SearchBackgroundDiv />
      <DarkDiv />
      {/* <Bouncing/> */}
    </>
  );
};
