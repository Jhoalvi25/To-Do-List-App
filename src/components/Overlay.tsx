import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { OverlayClicked } from "../redux/actions/overlay_action";

const Overlay = () => {
  const isClicked = useSelector((state: any) => state.sidebar.isClicked);
  const dispatch = useDispatch();
  const onClickOverlay = () => {
    dispatch(OverlayClicked());
  };
  return (
    <div
      className={`fixed top-0 left-0 z-20 w-[100%] h-[100vh] bg-[rgba(183,201,235,0.5)] transition-all duration-300 ease-in-out${
        isClicked ? "" : " invisible opacity-0"
      }`}
      onClick={onClickOverlay}></div>
    //active시 visible, opacity-1
  );
};

export default Overlay;