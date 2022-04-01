import { BImg, H1 } from "./style";
import { useState } from "react";

export const SearchBackgroundDiv = () => {
  const [htag, setHtag] = useState("Who delivers in your neighborhood?");
  console.log("htag", htag);

  return (
    <BImg className="SearchBackground">
      <H1>{htag}</H1>
      {/* <H1>Who delivers in your neighborhood?</H1> */}
      <button onClick={() => setHtag("Who delivers in your neighborhood?")}>
        a1
      </button>
      <button onClick={() => setHtag("fghjkl")}>a2</button>
    </BImg>
  );
};
