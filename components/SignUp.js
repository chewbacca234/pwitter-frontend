import styles from '../styles/SignUp.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../reducers/user'


function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login(data.userInfo));
          setUsername("");
          setPassword("");
        }
      });
  };

  return (
    <Modal
      open={open}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          Submit
        </Button>,
        <Button
          key="link"
          href="https://google.com"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Search on Google
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default SignUp;
