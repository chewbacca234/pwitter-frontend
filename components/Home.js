import { Button } from "antd";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);

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
    </main>
  );
}

export default Home;
