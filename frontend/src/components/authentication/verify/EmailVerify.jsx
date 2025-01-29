import { useState } from "react";
import { useLocation } from "react-router";
import styles from "./EmailVerify.module.css";
import PlanItLogo from "/PlanItLogo.webp";

const EmailVerify = () => {
  const [message, setMessage] = useState("");
  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");

  return (
    <div className={styles.emailVerifyDiv}>
      <img src={PlanItLogo} alt="PlanIt logo" />
      <h1>Email Verification</h1>
      <p>{message}</p>
    </div>
  );
};

export default EmailVerify;
