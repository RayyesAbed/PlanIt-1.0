import styles from "./Download.module.css";
import AppStorePreorder from "/AppStorePreorder.svg";

const Download = () => {
  return (
    <div id="download" className={styles.downloadDiv}>
      <div className={styles.wrapper}>
        <section>
          <h1>Downloads</h1>
          <p>
            Now you can use our website and create a new account and start your
            journey!
          </p>
          <p>
            An iOS app is currently under development and once it’s available,
            we will notify you. Please enter your email for our newsletter here
            below:
          </p>
          <div className={styles.newsletterWrapper}>
            <input
              type="email"
              className={styles.newsletterInput}
              name="email"
              placeholder="Enter your Email"
            />
            <button>Sign Up</button>
          </div>
        </section>
        <section>
          <img src={AppStorePreorder} alt="App Store Preorder Image" />
        </section>
      </div>
    </div>
  );
};

export default Download;
