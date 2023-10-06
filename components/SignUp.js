import styles from '../styles/SignUpIn.module.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user'
import { Button, Input } from "antd";
import Image from 'next/image'

function SignUp(props) {
  const dispatch = useDispatch();

  const [firstname, setFirstname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loadingModal, setLoadingModal] = useState(false);


  const handleSignUp = () => {
    setLoadingModal(true);

    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login(data.userInfo));
          setFirstname("");
          setUsername("");
          setPassword("");
          setLoadingModal(false);
          props.showSignUpModal();
        }
      });
  };

  return (
    <div className={styles.container}>
      <Image
        src="/images/logo_pwitter_50_50.png"
        alt="logo pwitter"
        width={50}
        height={50}
      ></Image>
      <h2>Creat your Pwitter account</h2>
      <Input
        className={styles.input}
        type="text"
        placeholder="Firstname"
        id="firstname"
        onChange={(e) => setFirstname(e.target.value)}
        value={firstname}
      />
      <Input
        className={styles.input}
        type="text"
        placeholder="Username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <Input
        className={styles.input}
        type="password"
        placeholder="Password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button
        className={styles.btn}
        key="signup"
        type="default"
        shape='round'
        loading={loadingModal}
        onClick={handleSignUp}>
        Sign up
      </Button>
    </div>
  );
}

export default SignUp;
