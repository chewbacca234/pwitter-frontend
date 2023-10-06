import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Login.module.css";
import Image from "next/image";
import { Modal, Button } from "antd";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const showModal = () => {
    setIsModalOpen(!isModalOpen);
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
      {/* Left Section */}
      <div className={styles.leftSection}>
        <Image
          src="/images/logo_pwitter_600_600.png"
          alt="logo pwitter"
          width={300}
          height={300}
        ></Image>
      </div>
      {/* Right Section */}
      <div className={styles.rightSection}>
        <Image
          src="/images/logo_pwitter_50_50.png"
          alt="logo pwitter"
          width={50}
          height={50}
        ></Image>
        {isModalOpen && (
          <div id="react-modals">
            <Modal
              getContainer="#react-modals"
              className={styles.modal}
              open={isModalOpen}
              closable={true}
              footer={null}
            >
              {modalContent}
            </Modal>
          </div>
        )}

        <h1 className={styles.title}>See what's happening</h1>
        <h2>Join Pwitter today.</h2>
        <Button
          type="primary"
          shape="round"
          size={'middle'}
          className={styles.btn}
          onClick={showModal}
        >Sign up</Button>
        <h3>Already have an account?</h3>
        <Button
          type="primary"
          shape="round"
          size={'middle'}
          className={styles.btn}
          onClick={showModal}
        >Sign in</Button>
      </div>
    </div>
  );
}

export default Login;
