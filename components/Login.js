import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import { Modal } from "antd";
import { login, logout } from "../reducers/user";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  let modalContent;
  if (!user.token) {
    modalContent = (
      <div className={styles.registerContainer}>
        <div className={styles.registerSection}>
          <p>Sign-up</p>
          <input
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          />
          <input
            type="password"
            placeholder="Password"
            id="signUpPassword"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          />
          <button id="register" onClick={() => handleRegister()}>
            Register
          </button>
        </div>
        <div className={styles.registerSection}>
          <p>Sign-in</p>
          <input
            type="text"
            placeholder="Username"
            id="signInUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            type="password"
            placeholder="Password"
            id="signInPassword"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
          <button id="connection" onClick={() => handleConnection()}>
            Connect
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <Image
          src="/images/logo_pwitter.png"
          alt="logo pwitter"
          width={300}
          height={250}
        ></Image>
      </div>
      <div className={styles.rightSection}>
        <Image
          // className={styles.logo}
          src="/images/logo_pwitter.png"
          alt="logo pwitter"
          width={30}
          height={25}
        ></Image>
        {isModalVisible && (
          <div id="react-modals">
            <Modal
              getContainer="#react-modals"
              className={styles.modal}
              visible={isModalVisible}
              closable={false}
              footer={null}
            >
              {modalContent}
            </Modal>
          </div>
        )}

        <h1 className={styles.title}>See what's happening</h1>
        <h2>Join HackaPwitt today.</h2>
        <button onClick={showModal}>Sign up</button>
        <p>Already have an account?</p>
        <button onClick={showModal}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;
