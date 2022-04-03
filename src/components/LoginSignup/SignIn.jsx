import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { NavSignup } from "./NavSignup";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../redux/actions";

import {
  Alert,
  AlertTitle,
  Checkbox,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notify = () =>
    toast.success("Logged in Successfully", {
      position: "top-center",
    });
  const notify2 = () =>
    toast.error("Please check your email or password", {
      position: "top-center",
    });
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const getformData = (e) => {
    let { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const loginHandler = () => {
    // validation for email and password
    const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordPattern =
      /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;
    if (!emailpattern.test(data.email)) {
      toast.warn("There must be a valid email address", {
        position: "top-center",
      });
    } else if (!passwordPattern.test(data.password)) {
      toast.warn(
        "Password must be in Alphanumeric format and min length of 8",
        {
          position: "top-center",
        }
      );
    } else {
      axios
        .post("https://grubhub-backend-clone.herokuapp.com/login", data)
        .then((res) => {
          if (res) {
            dispatch(UserLogin(res.data.user.firstName));
            localStorage.setItem(
              "userlogin",
              JSON.stringify(res.data.user.firstName)
            );
            
            notify();
            setTimeout(()=>{navigate("/home");},3000)
          }
        })
        .catch((error) => {
          notify2();
        });
    }
  };

  const googleLogin = () => {
    window.location.href =
      "https://grubhub-backend-clone.herokuapp.com/auth/google";
  };
  return (
    <>
      <NavSignup />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 500,
          },
          justifyContent: "center",
          marginTop: "20px",
          paddingTop:"65px"
        }}
      >
        <Paper
          elevation={3}
          sx={{ padding: "30px", display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}
          >
            Sign in with your Grubhub account
          </Typography>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ marginBottom: "25px" }}
            onChange={getformData}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ marginBottom: "10px" }}
            onChange={getformData}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
            }}
          >
            <div>
              <Checkbox /> <span>Keep me signed in</span>{" "}
            </div>
            <Typography
              variant="h6"
              sx={{ fontSize: "14px", marginTop: "9px", marginRight: "10px" }}
            >
              Reset password
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#572afb", color: "white " }}
            onClick={loginHandler}
          >
            Sign in
          </Button>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            or
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3b5998",
              color: "white",
              marginBottom: "20px",
            }}
            startIcon={<FacebookIcon />}
          >
            Continue With FaceBook
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#4285f4", color: "white " }}
            startIcon={<GoogleIcon />}
            onClick={googleLogin}
          >
            Continue With Google
          </Button>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            <Link to="/create-account">Create your account</Link>
          </Typography>
        </Paper>
      </Box>
      <ToastContainer />
    </>
  );
};
