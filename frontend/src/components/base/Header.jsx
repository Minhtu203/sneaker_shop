import { useRef, useState } from 'react';
import { Button, InputText, Menu } from '../uiCore/index';
import { useUserState } from '@/store/userState';
import { ButtonSidebar } from '../uiCore/Button/Button';
import { CreateAxios } from '@/lib/axios';
import { logoutApi } from '@/api/auth/logoutApi';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { userInfo, clearUserInfo, setUserInfo } = useUserState();
  let axiosJWT = CreateAxios(userInfo, setUserInfo);
  const navigate = useNavigate();

  console.log(999999, userInfo);

  let items = [
    {
      label: 'Hồ sơ',
      icon: 'pi pi-user',
      command: () => {
        console.log(11111);
      },
    },
    {
      label: 'Đăng xuất',
      icon: 'pi pi-sign-out',
      command: () => {
        logoutApi(userInfo?._id, clearUserInfo, userInfo?.accessToken, axiosJWT);
        if (!userInfo) navigate('/login');
      },
    },
  ];
  const [toggleUser, setToggleUser] = useState(false);
  const menu = useRef(null);

  return (
    <div className="h-[var(--height-header)] w-full bg-white border-b border-b-gray-400 flex flex-row items-center justify-start px-8">
      {/* input search */}
      <div className="relative w-[15rem]">
        <i className="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <InputText placeholder="Tìm kiếm..." className="pl-10 w-full" />
      </div>

      <div className="w-[6rem] ml-auto">
        <ButtonSidebar
          onClick={(e) => menu.current.toggle(e)}
          label={userInfo?.username}
          className="text-[var(--primary-blue)] transform-none hover:bg-white flex gap-2"
        >
          {userInfo?.username}
        </ButtonSidebar>
      </div>
      <Menu model={items} popup ref={menu} />
    </div>
  );
}

export default Header;
