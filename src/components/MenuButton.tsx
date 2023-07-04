import React from "react";
import { HiMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { SidebarClicked } from "../redux/actions/sidebar_action";

const MenuButton = () => {
  const dispatch = useDispatch();
  const onClickMenuButton = () => {
    dispatch(SidebarClicked());
  };
  return (
    <button type="button" className="p-2" onClick={onClickMenuButton}>
      <HiMenu className="text-[24px]" />
    </button>
  );
};

export default MenuButton;
