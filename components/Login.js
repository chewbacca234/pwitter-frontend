import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { Button, ConfigProvider, Modal } from "antd";
import Image from "next/image";

import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const user = useSelector((state) => state.user);
  const router = useRouter()

  const showSignUpModal = () => {
    setIsSignInModalOpen(false);
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };
  const showSignInModal = () => {
    setIsSignUpModalOpen(false);
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const handleSignUpCancel = () => {
    showSignUpModal();
  };

  const handleSignInCancel = () => {
    showSignInModal();
  };

  if (user.token) {
    router.push('/home');
  } else {
    return (
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <Image
            src="/images/logo_pwitter_600_600_v2.png"
            alt="logo pwitter"
            width={300}
            height={300}
          ></Image>
        </div>
        {/* Right Section */}
        <div className={styles.rightSection}>
          <Image
            src="/images/logo_pwitter_50_50_v2.png"
            alt="logo pwitter"
            width={50}
            height={50}
          ></Image>

          {/* Modal */}
          {isSignUpModalOpen && (
            <ConfigProvider
              theme={{
                token: {
                  colorBgElevated: '#161d28',
                  colorText: 'white',
                },
              }}>
              <div id="react-modals">
                <Modal
                  getContainer="#react-modals"
                  open={isSignUpModalOpen}
                  onOk={null}
                  onCancel={handleSignUpCancel}
                  closable={true}
                  footer={null}
                >
                  <SignUp showSignUpModal={showSignUpModal} />
                </Modal>
              </div>
            </ConfigProvider>
          )}
          {isSignInModalOpen && (
            <ConfigProvider
              theme={{
                token: {
                  colorBgElevated: '#161d28',
                  colorText: 'white',
                },
              }}>
              <div id="react-modals">
                <Modal
                  getContainer="#react-modals"
                  open={isSignInModalOpen}
                  onOk={null}
                  onCancel={handleSignInCancel}
                  closable={true}
                  footer={null}
                >
                  <SignIn showSignInModal={showSignInModal} />
                </Modal>
              </div>
            </ConfigProvider>
          )}

          <h1 className={styles.title}>See what's happening</h1>
          <h2>Join Pwitter today.</h2>
          <Button
            type="primary"
            shape="round"
            className={styles.btn}
            onClick={showSignUpModal}
          >Sign up</Button>
          <h3>Already have an account?</h3>
          <Button
            type="primary"
            shape="round"
            className={styles.btn}
            onClick={showSignInModal}
          >Sign in</Button>
        </div>
      </div>
    );
  }
}

export default Login;
