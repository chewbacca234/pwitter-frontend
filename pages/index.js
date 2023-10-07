import { useSelector } from "react-redux";
import { useRouter } from 'next/router';

function Index() {
  const user = useSelector((state) => state.user);
  const router = useRouter()

  !user.token ? router.push('/login') : router.push('/home');
}

export default Index;
