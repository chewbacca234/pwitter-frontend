import { Button } from "antd";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  const [pwittInput, setPwittInput] = useState("");

  return (
    <main className={styles.main}>
      <div classname={styles.containerLeft}>
        <Image
          className={styles.logo}
          src="/logo_pwitter.png"
          alt="logo pwitter"
          width={30}
          height={25}
        ></Image>
        <div classname={styles.userInfo}>
          <span className={styles.userInfos}>{user.username}</span>
          <span className={styles.userInfos}>{user.firstname}</span>

          <Image
            className={styles.logo}
            src={'/images/'+ user.picture}
            alt="user picture"
            width={50}
            height={50}
          ></Image>
        </div>

        <Button>Logout</Button>
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
          <button onClick={() => handleClick()} className={styles.button}>
            Pwitt
          </button>
        </span>
      </div>
      <div className={styles.containerRight}>
        <h2>Trends</h2>
      </div>
    </main>
  );
}

export default Home;
