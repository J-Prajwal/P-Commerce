import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { getUserDataApi } from "../Redux/AuthReducer/auth.actions";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to={"/"}>
        P-Comm
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
import { Center, CircularProgress } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { removeItem, setItem } from "../Utils/localStorage";
const theme = createTheme();

export default function SignIn() {
  //API to get user data -> https://40d8hv.sse.codesandbox.io/users
  const { userData, isLoading } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(getUserDataApi());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const generateToken = () => {
      const character =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let res = "";
      let len = Math.floor(Math.random() * 20 + 10);
      for (let i = 0; i < len; i++) {
        res += character.charAt(Math.floor(Math.random() * character.length));
      }
      return res;
    };

    const isValid = (info) => {
      let res;
      userData.forEach((elem) => {
        res = elem.email == info.email && elem.password == info.password;
        if (res) {
          const token = generateToken();
          const payload = { username: elem.username, token: token };
          setItem("user", payload);
          console.log(token);
          return res;
        } else {
          removeItem("user");
        }
      });
      return res;
    };

    const data = new FormData(event.currentTarget);
    const info = {
      email: data.get("email"),
      password: data.get("password"),
    };

    if (isValid(info)) {
      navigate("/");
    } else {
      navigate("/Error");
    }
  };

  if (isLoading) {
    return (
      <Center mt={"15%"}>
        <CircularProgress size={"100px"} isIndeterminate color="blue.300" />
      </Center>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to={"/signin"} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
