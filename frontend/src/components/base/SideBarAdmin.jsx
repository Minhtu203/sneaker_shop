import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoShoes.png';
import { ButtonSidebar } from '../uiCore/Button/Button';

export default function SideBarAdmin({ toggleSidebar, setToggleSidebar }) {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`border-r border-gray-300 bg-white h-screen flex flex-col overflow-auto items-center py-8 pb-20 gap-4 
          fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out scrollbar-hide
          ${toggleSidebar ? 'w-[100%] md:w-[var(--width-sidebar)] translate-x-0' : 'w-[100%] md:w-[var(--width-sidebar)] -translate-x-full'}`}
    >
      {windowWidth < 768 && (
        <button
          onClick={() => setToggleSidebar(!toggleSidebar)}
          className="absolute top-5 right-6 pi pi-times w-10 h-10 rounded-[50%] bg-[var(--primary-blue)] text-white cursor-pointer"
        />
      )}
      <img
        alt="logo"
        src={logo}
        className="w-[8rem] h-[8rem]"
        style={{
          animation: 'spin-slow 10s linear infinite',
        }}
      />
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="w-full flex flex-col gap-3">
        {/* <ButtonSidebar
          noIcon={true}
          onClick={() => navigate('/admin/dashboard')}
          className={`${location.pathname === '/admin/dashboard' ? 'text-[var(--primary-yellow)] !bg-[var(--primary-blue)]' : ''}`}
        >
          Dashboard
        </ButtonSidebar> */}

        <ButtonSidebar
          noIcon={true}
          onClick={() => navigate('/admin/user-management')}
          className={`${location.pathname === '/admin/user-management' ? 'text-[var(--primary-yellow)] !bg-[var(--primary-blue)]' : ''}`}
        >
          User Management
        </ButtonSidebar>

        <ButtonSidebar
          noIcon={true}
          onClick={() => navigate('/admin/shoes-management')}
          className={`${location.pathname === '/admin/shoes-management' ? 'text-[var(--primary-yellow)] !bg-[var(--primary-blue)]' : ''}`}
        >
          Shoes Management
        </ButtonSidebar>

        {/* <ButtonSidebar
          noIcon={true}
          onClick={() => navigate('/admin/order-management')}
          className={`${location.pathname === '/admin/order-management' ? 'text-[var(--primary-yellow)] !bg-[var(--primary-blue)]' : ''}`}
        >
          Order Management
        </ButtonSidebar> */}
      </div>
    </div>
  );
}
