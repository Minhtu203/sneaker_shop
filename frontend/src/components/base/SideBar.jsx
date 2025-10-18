import logo from '../../assets/logoShoes.png';
import { Sidebar as Sidebarz } from 'primereact/sidebar';
import { ButtonSidebar } from '../uiCore/Button/Button';

function Sidebar() {
  return (
    <div className="border border-gray-400 bg-white w-[var(--width-sidebar)] h-screen flex flex-col items-center py-8 gap-4">
      <img alt="logo" src={logo} className="w-[8rem] h-[8rem]" />
      <div className="w-9/10 flex flex-col gap-3">
        <ButtonSidebar noIcon={true} onClick={() => console.log(988888)}>
          Home
        </ButtonSidebar>
        <ButtonSidebar>Thể thao</ButtonSidebar>
        <ButtonSidebar>Trẻ em</ButtonSidebar>
        <ButtonSidebar>Thể thao</ButtonSidebar>
        <ButtonSidebar>Thể thao</ButtonSidebar>
      </div>
    </div>
  );
}

export default Sidebar;
