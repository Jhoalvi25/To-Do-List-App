import { useSelector } from "react-redux";

interface RootState {
  isOn: boolean;
}

const isOn = useSelector((state: RootState) => state.isOn)
