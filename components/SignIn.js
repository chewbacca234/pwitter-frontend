import styles from '../styles/SignUpIn.module.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user'
import { Button, Input, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Image from 'next/image'

function SignIn(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loadingModal, setLoadingModal] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (error) => {
    api['error']({
      message: 'Can\'t sign up!',
      description: error,
    });
  }

  const handleSignIn = () => {
    setLoadingModal(true);

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: username, token: data.token }));
          setUsername("");
          setPassword("");
          setLoadingModal(false);
          props.showSignInModal();
        } else {
          setLoadingModal(false);
          openNotification(data.error);
        }
      });
  };

  return (
    <div className={styles.container}>
      <Image
        src="/images/logo_pwitter_50_50_v2.png"
        alt="logo pwitter"
        width={50}
        height={50}
      ></Image>
      <h2>Connect to Pwitter</h2>
      <Input
        className={styles.input}
        type="text"
        placeholder="Username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Input.Password
        className={styles.input}
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        type="password"
        placeholder="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      {contextHolder}
      <Button
        className={styles.btn}
        key="signup"
        type="default"
        shape='round'
        loading={loadingModal}
        onClick={handleSignIn}>
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;
