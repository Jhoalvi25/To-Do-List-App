import { FcTodoList } from "react-icons/fc";

const Logo = ({ large }: any) => {
  return (
    <div className="flex items-center justify-center p-2">
      <FcTodoList
        className={large ? "text-[50px] mr-1" : "text-[24px]"}
      />
      <strong className={large ? "text-[40px]" : ""}>ToDoList</strong>
    </div>
  );
};

export default Logo;