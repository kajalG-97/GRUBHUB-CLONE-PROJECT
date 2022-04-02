import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const ResponsiveAppBar = () => {

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png"
                alt=""
                style={{ width: "130px", height: "70px" }}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Box sx={{ flexGrow: 0 }}>
                {/* <Link to={'/'}> */}
                <Tooltip title="Login">
                  <IconButton onClick={() => navigate("/login")} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2021/12/grubhub-vector-logo-2021.png"
                alt=""
                style={{ width: "130px", height: "70px" }}
              />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                key={"Catering"}

                sx={{ my: 2, color: "black", display: "block" }}
              >
                Catering
              </Button>
              <Button
                key={"Hi! Kajal"}

                sx={{ my: 2, color: "black", display: "block" }}
              >
                Hi! Kajal
              </Button>
            </Box>
            <ShoppingBagIcon
              onClick={() => navigate("/cart")}
              sx={{ color: "black", marginRight: "2px" }}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
