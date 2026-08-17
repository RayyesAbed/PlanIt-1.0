import { useLocation, useNavigate } from "react-router";
import styles from "./ResetPassword.module.css";
import PlanItLogo from "/PlanItLogo.webp";
import { useEffect, useState } from "react";
import { verifyResetPasswordToken } from "../../../api/auth/verifyResetPasswordToken";
import { TextField } from "@mui/material";
import { resetPassword } from "../../../api/auth/resetPassword";

const ResetPassword = () => {
  document.title = "Reset Password";
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const response = await verifyResetPasswordToken(token);
      if (!response) {
        setIsTokenValid(false);
      } else {
        setIsTokenValid(true);
      }
    };

    verifyToken();
  }, [token]);

  const handleResetPassword = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      const result = await resetPassword(token, confirmPassword);
      if (!result) {
        alert("There was an error resetting your password");
      } else {
        alert("Password reset successfully!");
        navigate("/login");
      }
    }
  };

  return (
    <div className={styles.resetPasswordDiv}>
      <img src={PlanItLogo} alt="PlanIt logo" />
      <h1>Reset Password</h1>
      {isTokenValid ? (
        <form id={styles.resetPasswordForm}>
          <TextField
            type="password"
            sx={{ backgroundColor: "rgb(244, 244, 244)" }}
            label="Enter your new password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            type="password"
            sx={{ backgroundColor: "rgb(244, 244, 244)" }}
            label="Confirm your new password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <button onClick={handleResetPassword}>Reset</button>
        </form>
      ) : (
        <div>You do not have the permission to reset your password</div>
      )}
    </div>
  );
};

export default ResetPassword;
