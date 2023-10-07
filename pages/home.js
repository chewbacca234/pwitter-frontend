import Home from "../components/Home";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";

function HomePage() {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  if (!user.token) {
    router.push('/login');
  } else {
  return <Home />;
}
}

export default HomePage;
