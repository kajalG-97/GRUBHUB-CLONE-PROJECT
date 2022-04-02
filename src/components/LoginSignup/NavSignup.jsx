import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

import { useNavigate } from "react-router-dom";

// import { makeStyles } from '@mui/styles';
import { Box } from "@mui/system";
// const useStyle= makeStyles({
//   logo:{
//       width:"150px",
//       height: "90px"
//   },
//   nav:{
//       display:"flex"
//   }
// })
export const NavSignup = () => {
  const navigate = useNavigate();
  //    const classes= useStyle();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png"
              alt=""
              style={{ width: "130px", height: "70px" }}
              onClick={() => navigate("/home")}
            />
            <ShoppingBagIcon sx={{ color: "black", marginRight: "2px" }} />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
