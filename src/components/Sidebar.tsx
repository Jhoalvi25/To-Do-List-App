import { useSelector } from "react-redux/es/hooks/useSelector";
import SidebarProgressBar from "./SidebarProgressBar";
import { signOut } from "firebase/auth";
import { authService, dbService } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

const Sidebar = () => {
  const isClicked = useSelector((state: any) => state.sidebar.isClicked);
  const email = useSelector((state: any) => state.user.email);
  const contentObject = useSelector((state: any) => state.content);
  const onLogout = () => {
    signOut(authService);
  };
  const onReset = () => {
    const real = global.confirm("Are you sure you want to clear all?");
    if (real) {
      Object.keys(contentObject)
        .map((i) => contentObject[i])
        .map((item) => {
          console.log(item);
          deleteDoc(doc(dbService, email, item.id));
        });
    }
  };
  return (
    <div
      className={`w-[280px] p-5 fixed top-0 right-0 z-40 h-[100vh] bg-white transition-all duration-200 ease-in-out flex flex-col ${
        isClicked ? "translate-x-0" : "translate-x-[100%]"
      }`}>
      <strong className="text-center block mb-10">{email} Sir</strong>

      <SidebarProgressBar />

      <footer className="flex justify-around items-center mb-4">
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg"
          onClick={onReset}>
          <strong>Reset</strong>
        </button>
        <button
          type="button"
          className="p-2 bg-[#97BBFF] text-white rounded-lg"
          onClick={onLogout}>
          <strong>Log out</strong>
        </button>
      </footer>

      <p className="text-center">
        MadeBy{" "}
        <a
          href=""
          className="font-bold text-[#1D324C] transition duration-200 ease-in-out hover:text-[blue] active:text-[blue]">
          Jhoalvi
        </a>
      </p>
    </div>
  );
};

export default Sidebar;