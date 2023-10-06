import styles from "../styles/Home.module.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function Login() {
  return (
    <div>
      <div>
        <Image
          src="/logo_pwitter.png"
          alt="logo pwitter"
          width={300}
          height={300}
        ></Image>
        <Image
          src="/fond_pwitter.jpg"
          alt="logo pwitter"
          width={1000}
          height={400}
        ></Image>
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>See what's happening</h1>
        <h2>Join HackaPwitt today.</h2>
        <button>Sign up</button>
        <h3>Already have an account?</h3>
        <button>Sign in</button>
      </main>
    </div>
  );
}

export default Login;
