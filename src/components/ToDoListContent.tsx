import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useSelector } from "react-redux";
import { dbService, storageService } from "../firebase/config";
import { GoSmiley } from "react-icons/go";
import { ChangeEvent, MouseEvent } from "react";

const ToDoListContent = () => {
  const contentList = useSelector((state: any) => state.content);
  const email = useSelector((state: any) => state.user.email);
  const onCheck = async (e: ChangeEvent<HTMLInputElement>, id: any) => {
    console.log(e.target.checked);
    const targetItemRef = doc(dbService, email, id);
    await updateDoc(targetItemRef, {
      check: e.target.checked,
    });
  };
  const onDeleteButton = async (e: any, id: string, img: string | undefined) => {
    await deleteDoc(doc(dbService, email, id));
    if (img !== "") await deleteObject(ref(storageService, img));
  };
  return (
    <ol className="w-[100%] h-[100%] pt-[40px] pb-[45px] px-3 flex flex-col-reverse overflow-y-auto">
      {Object.keys(contentList)
        .map((i) => contentList[i])
        .map((item, i) => (
          <li
            key={i}
            className={`mb-2 p-1 rounded-[4px] relative ${
              item.check ? "bg-[rgba(255,255,255,0.6)]" : "bg-white"
            }`}
          >
            {item.image !== "" ? (
              <img
                src={item.image}
                alt=""
                className={`w-[100%] h-[250px] object-contain ${
                  item.check ? "opacity-60" : ""
                }`}
              />
            ) : (
              <></>
            )}

            <div className="flex items-center justify-start">
              <input
                type="checkbox"
                className="mr-1 shrink-0"
                name=""
                id=""
                onChange={(e) => onCheck(e, item.id)}
                checked={item.check}
              />

              {item.check ? (
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[40px] p-1 border-[red] border-2 rounded-lg flex items-center justify-center">
                  <GoSmiley className="text-[red] text-[30px] mr-1" />
                  <strong className="text-[red]">Completed!</strong>
                </div>
              ) : (
                <></>
              )}

              <div className="grow">{item.text}</div>
              <button
                type="button"
                className="shrink-0"
                onClick={(e) =>
                  onDeleteButton(e, contentList[i].id, contentList[i].image)
                }
              >
               Delete
              </button>
            </div>
          </li>
        ))}
    </ol>
  );
};

export default ToDoListContent;
