import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateAxios } from '@/lib/axios';
import { useUserState } from '@/store/userState';
import { Button, Menu } from '../uiCore/index';
import userAvatar from '../../assets/userDefault.png';
import { logoutApi } from '@/api/auth/logoutApi';
import { ButtonSidebar } from '../uiCore/Button/Button';

export default function HeaderAdmin({ toggleSidebar, setToggleSidebar }) {
  const { userInfo, clearUserInfo, setUserInfo } = useUserState();
  let axiosJWT = CreateAxios(userInfo, setUserInfo);
  const navigate = useNavigate();
  const menu = useRef(null);

  let items = [
    {
      label: 'Log out',
      icon: 'pi pi-sign-out',
      command: () => {
        logoutApi(userInfo?._id, clearUserInfo, userInfo?.accessToken, axiosJWT, navigate);
      },
    },
  ];
  return (
    <div
      className={`h-[var(--height-header)] bg-white border-b border-b-gray-300 
      flex flex-row items-center justify-start px-8 gap-4 ${toggleSidebar ? 'hidden md:flex md:ml-[var(--width-sidebar)]' : 'ml-0'}
        transition-all duration-500 ease-in-out sticky z-50`}
    >
      <Button
        className="md:w-16 w-16 !bg-[var(--primary-blue)] hover:!bg-[var(--primary-blue-hover)]"
        icon="pi pi-align-justify"
        aria-label="Filter"
        onClick={() => setToggleSidebar(!toggleSidebar)}
      />
      <div className="flex gap-4 flex-row items-center ml-auto">
        <img
          alt="user"
          src={userInfo?.avatar ? userInfo?.avatar : userAvatar}
          className="hidden md:flex w-12 h-12 object-cover rounded-[50%] hover:cursor-pointer"
          onClick={(e) => menu.current.toggle(e)}
        />
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
