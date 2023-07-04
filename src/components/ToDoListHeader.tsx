import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NowDate from "./NowDate";

const ToDoListHeader = () => {
  return (
    <header className="flex w-[100%] justify-between absolute top-0 z-10 bg-[#B7C9EB]">
      <Logo />
      <NowDate />
      <MenuButton />
    </header>
  );
};

export default ToDoListHeader;
