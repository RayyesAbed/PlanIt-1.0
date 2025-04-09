import { CircularProgress, TextField } from "@mui/material";
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
import { Link, useNavigate } from "react-router";
import { loginUser } from "../../../api/loginUser";
import { resetPasswordRequest } from "../../../api/resetPasswordRequest";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [isLoginPending, setIsLoginPending] = useState(false);
  const [isPasswordResetPending, setIsPasswordResetPending] = useState(false);

  const handleChangeEmail = (event) =>
    setUserCredentials({ ...userCredentials, email: event.target.value });

  const handleChangePassword = (event) =>
    setUserCredentials({ ...userCredentials, password: event.target.value });

  const handleClickToggleShowPassword = () => setShowPassword(!showPassword);

  const loginUserHandler = async (event) => {
    event.preventDefault();
    setIsLoginPending(true);
    const result = await loginUser(userCredentials);
    if (!result) {
      alert("Invalid email, password or both!");
      setIsLoginPending(false);
    } else {
      navigate("/tasks");
    }
  };

  const resetUserRequestHandler = async () => {
    setIsPasswordResetPending(true);
    await resetPasswordRequest(userCredentials.email);
    alert(
      "If the email you provided is registered, you will receive an email with instructions to reset your password."
    );
    setIsPasswordResetPending(false);
  };

  return (
    <div className={styles.loginDiv}>
      <section>
        <img src={LoginSectionImg} alt="Login Image" />
      </section>
      <section>
        <form onSubmit={loginUserHandler}>
          <img src={Logo} alt="PlanIt Logo" />
          {isLoginPending ? (
            <>
              <h1>Logging in...</h1>
              <CircularProgress />
            </>
          ) : (
            <>
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
              <Link
                className={styles.forgotPasswordLink}
                onClick={resetUserRequestHandler}
              >
                {isPasswordResetPending
                  ? "Sending a password reset email..."
                  : "Forgot your Password?"}
              </Link>
              <button className={styles.loginButton}>Login</button>
              <Link className={styles.createAccountLink} to="/register">
                Don&apos;t have an account? Then register
              </Link>
            </>
          )}
        </form>
      </section>
    </div>
  );
};

export default Login;
