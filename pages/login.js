import Login from "../components/Login";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";

function LoginPage() {
  const user = useSelector((state) => state.user);
  const router = useRouter();

  if (user.token) {
    router.push('/home');
  } else {
    return <Login />;
  }
}

export default LoginPage;
