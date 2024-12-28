import styles from "./Register.module.css";
import SignUpSectionImg from "/SignUpSectionImg.webp";
import Logo from "/PlanItLogo.webp";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickToggleShowPassword = () => setShowPassword(!showPassword);

  document.title = "PlanIt Register";

  return (
    <div className={styles.regsisterDiv}>
      <section>
        <form>
          <img src={Logo} alt="PlanIt logo" />
          <h1>Create a new account</h1>
          <TextField
            type="text"
            label="Enter your Name"
            sx={{ backgroundColor: "rgb(244, 244, 244)" }}
            className={styles.registerInput}
          />
          <TextField
            type="email"
            label="Enter your Email"
            sx={{ backgroundColor: "rgb(244,244,244)" }}
            className={styles.registerInput}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Enter your Password
            </InputLabel>
            <OutlinedInput
              className={styles.registerInput}
              sx={{ backgroundColor: "rgb(244,244,244)" }}
              id="outlined-adornment-password"
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
            />
          </FormControl>
          <button className={styles.registerButton}>Register</button>
          <Link to="/login" className={styles.existingAccountLink}>
            Already have an account? Then sign in
          </Link>
        </form>
      </section>
      <section>
        <img src={SignUpSectionImg} alt="Sign Up Image" />
      </section>
    </div>
  );
};

export default Register;
