import { TextField } from "@mui/material";
import styles from "./Login.module.css";
import LoginSectionImg from "/LoginSectionImg.webp";
import Logo from "/PlanItLogo.webp";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (event) =>
    setUserCredentials({ ...userCredentials, email: event.target.value });

  const handleChangePassword = (event) =>
    setUserCredentials({ ...userCredentials, password: event.target.value });

  const handleClickToggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className={styles.loginDiv}>
      <section>
        <img src={LoginSectionImg} alt="Login Image" />
      </section>
      <section>
        <form>
          <img src={Logo} alt="PlanIt Logo" />
          <h1>Log in to your account</h1>
          <TextField
            type="email"
            label="Enter your Email"
            value={userCredentials.email}
            onChange={handleChangeEmail}
            sx={{ backgroundColor: "rgb(244, 244, 244)" }}
            className={styles.loginInput}
            required
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Enter your Password
            </InputLabel>
            <OutlinedInput
              className={styles.loginInput}
              sx={{ backgroundColor: "rgb(244,244,244)" }}
              id="outlined-adornment-password"
              value={userCredentials.password}
              onChange={handleChangePassword}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickToggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Enter your Password"
              required
            />
          </FormControl>
          <Link className={styles.forgotPasswordLink}>
            Forgot your Password?
          </Link>
          <button className={styles.loginButton}>Login</button>
          <Link className={styles.createAccountLink} to="/register">
            Don&apos;t have an account? Then register
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
