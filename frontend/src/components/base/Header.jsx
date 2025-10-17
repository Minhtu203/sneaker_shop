import { useRef, useState } from 'react';
import { Button, Menu } from '../uiCore/index';
import { useUserState } from '@/store/userState';
import { ButtonSidebar } from '../uiCore/Button/Button';

function Header() {
  let items = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' },
  ];
  const [toggleUser, setToggleUser] = useState(false);
  const menu = useRef(null);

  const { userInfo } = useUserState();

  return (
    <div className="h-[var(--height-header)] w-full bg-white border-b border-b-gray-400 flex flex-row items-center justify-start">
      <div className="w-[6rem] ml-auto">
        <ButtonSidebar
          onClick={(e) => menu.current.toggle(e)}
          text
          label={userInfo?.username}
          className="text-[var(--primary-blue)] hover:underline transform-none"
        >
          {userInfo?.username}
        </ButtonSidebar>
        {/* {toggleUser &&  */}
        <Menu model={items} popup ref={menu} />
        {/* } */}
      </div>
    </div>
  );
}

export default Header;
