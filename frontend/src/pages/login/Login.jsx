import styles from "./Login.module.css";
import LoginSectionImg from "/LoginSectionImg.webp";

const Login = () => {
  return (
    <div className={styles.loginDiv}>
      <section>
        <img src={LoginSectionImg} alt="Login Image" />
      </section>
      <section></section>
    </div>
  );
};

export default Login;
