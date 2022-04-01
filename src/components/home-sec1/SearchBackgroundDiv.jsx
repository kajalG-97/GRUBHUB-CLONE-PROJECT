import { BImg, H1 } from "./style";
import { useState } from "react";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchAppBar from "./SearchBar";
import Box from '@mui/material/Box';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Active" />
     
      <Tab label="Active" />
    </Tabs>
  );
}



export const SearchBackgroundDiv = () => {
  const [htag, setHtag] = useState("Who delivers in your neighborhood?");
  console.log("htag", htag);


  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "block" }}}>
      
        <BImg className="SearchBackground">
            <H1>{htag}</H1>
            {/* <H1>Who delivers in your neighborhood?</H1> */}
        {/* <Button variant="text">Text</Button> */}
        <DisabledTabs/>
            <Button  onClick={() => setHtag("Who delivers in your neighborhood?")}>Delivery</Button>
            <button onClick={() => setHtag("Who offers pickup near you?")}>Pickup</button>
            <SearchAppBar/>
        </BImg>  
      </Box>
    );
}

