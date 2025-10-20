import { Button } from '@/components/uiCore/index';
import { useUserState } from '@/store/userState';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const { userInfo, clearUserInfo } = useUserState();

  const handleLogout = () => {
    clearUserInfo();
    navigate('/login');
  };

  return <div className="w-full h-full bg-amber-400">homepage</div>;
}

export default Home;
