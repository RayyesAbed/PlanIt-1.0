import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "./EmailVerify.module.css";
import PlanItLogo from "/PlanItLogo.webp";
import { verifyNewUser } from "../../../api/auth/verifyNewUser";

const EmailVerify = () => {
  const [message, setMessage] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  useEffect(() => {
    if (!token) {
      setMessage("Invalid verification token!");
      return;
    }

    const verify = async () => {
      try {
        await verifyNewUser(token);
        setMessage("Email verified successfully!");
      } catch (error) {
        setMessage("Verification went wrong!");
        console.error("Verification Error:", error);
      }
    };

    verify();
  }, [token]);

  return (
    <div className={styles.emailVerifyDiv}>
      <img src={PlanItLogo} alt="PlanIt logo" />
      <h1>Email Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default EmailVerify;
