import { Button } from "antd";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logout } from '../reducers/user'

function Home() {
  const user = useSelector((state) => state.user);
  const [pwittInput, setPwittInput] = useState("");
  const dispatch = useDispatch();

  // Get all hashtags from a pwitt
  function extractHashtags(pwitt) {
  const hashtagRegex = /#(\w+)/g;
  const hashtags = message.match(hashtagRegex);

  return hashtags || null;
}
  return (
    <main className={styles.main}>
      <div className={styles.containerLeft}>
        <Image
          src="/images/logo_pwitter_50_50_v2.png"
          alt="logo pwitter"
          width={50}
          height={50}
        ></Image>
        <div className={styles.userContainer}>
          <div className={styles.userSection}>
            <Image
              src={user.picture}
              alt="user picture"
              width={50}
              height={50}
            ></Image>
            <div className={styles.userInfo}>
              <h3 className={styles.firstname}>{user.firstname}</h3>
              <p className={styles.username}>@{user.username}</p>
            </div>
          </div>

          <Button
            type="default"
            shape="round"
            className={styles.btn}
            onClick={() => dispatch(logout())}
          >Logout</Button>
        </div>
      </div>

      <div className={styles.containerMid}>
        <h2>Home</h2>
        <span>
          <input
            placeholder="What's up?"
            onChange={(e) => setPwittInput(e.target.value)}
            value={pwittInput}
            className={styles.input}
          />
          <Button
            type="primary"
            shape="round"
            size='small'
            // TODO handle  click => fetch backend to post pwitt
            onClick={null}>
            Pwitt
          </Button>
        </span>
      </div>
      <div className={styles.containerRight}>
        <h2>Trends</h2>
      </div>
    </main>
  );
}

export default Home;
