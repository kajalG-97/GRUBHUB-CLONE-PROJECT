import Paper from "@mui/material/Paper";
import { NavSignup } from "./NavSignup";
import Box from "@mui/material/Box";
import { Checkbox, IconButton, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
export const SignUp = () => {
  const notify = () =>
    toast.success("Registered Successfully", {
      position: "top-center",
    });
  const notify2 = () =>
    toast.error("Please check your email or password", {
      position: "top-center",
    });
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const getformData = (e) => {
    let { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const registerHandler = () => {
    // validation for email ,name and password
    const namepattern = /[a-zA-Z]/;
    const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordPattern =
      /^(?=[^A-Z\n]*[A-Z])(?=[^a-z\n]*[a-z])(?=[^0-9\n]*[0-9])(?=[^#?!@$%^&*\n-]*[#?!@$%^&*-]).{8,}$/;

    if (!namepattern.test(data.firstName)) {
      toast.warn("First Name must contain  only alphabates", {
        position: "top-center",
      });
    } else if (!namepattern.test(data.lastName)) {
      toast.warn("Last Name must contain  only alphabates", {
        position: "top-center",
      });
    } else if (!emailpattern.test(data.email)) {
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
        .post("https://grubhub-backend-clone.herokuapp.com/register", data)
        .then((res) => {
          if (res) {
            notify();
          }
        })
        .catch((error) => {
          notify2();
        });
    }
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
            height: 550,
          },
          justifyContent: "center",
          marginTop: "20px",
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <Paper
          elevation={3}
          sx={{ padding: "30px", display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "25px", fontWeight: "bold", marginBottom: "20px" }}
          >
            Create your account
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              sx={{ marginBottom: "25px" }}
              onChange={getformData}
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              sx={{ marginBottom: "25px" }}
              onChange={getformData}
            />
          </Box>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ marginBottom: "25px" }}
            onChange={getformData}
          />
          <TextField
            id="password"
            label="Password (8 character minimum)"
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
          </Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#572afb", color: "white " }}
            onClick={registerHandler}
          >
            Create your account
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
            onClick={()=>{
              window.location.href="https://grubhub-backend-clone.herokuapp.com/auth/google"
            }}
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
            Have an account? <Link to={"/Login"}>Sign in</Link>
          </Typography>
        </Paper>
      </Box>

      <ToastContainer />
    </>
  );
};
