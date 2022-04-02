import { BImg, H1 } from "./style";
import { useState } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchAppBar from "./SearchBar";

// export default function ColorButtons() {
//     return (
//         <Stack direction="row" spacing={2}>
//             <Button color="secondary">Secondary</Button>
//             <Button variant="contained" color="success">
//                 Success
//             </Button>
//             <Button variant="outlined" color="error">
//                 Error
//             </Button>
//         </Stack>
//     );
// }

export const SearchBackgroundDiv = () => {
  const [htag, setHtag] = useState("Who delivers in your neighborhood?");
  console.log("htag", htag);

  return (
    <BImg className="SearchBackground">
      <H1>{htag}</H1>
      {/* <H1>Who delivers in your neighborhood?</H1> */}
      {/* <Button variant="text">Text</Button> */}
      <button onClick={() => setHtag("Who delivers in your neighborhood?")}>
        Delivery
      </button>
      <button onClick={() => setHtag("Who offers pickup near you?")}>
        Pickup
      </button>
      <SearchAppBar />
    </BImg>
  );
};
