import React, { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { collection, addDoc} from "firebase/firestore";
import { dbService, storageService } from "../firebase/config";
import { useSelector } from "react-redux";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const ToDoListInputForm = () => {
  const email = useSelector((state: any) => state.user.email);
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUpload, setIsUpload] = useState(false);


  const textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addListItem = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsUpload(true);
      let tempImage = "";
      if (imageUrl !== "") {
        const response = await uploadString(
          ref(storageService, email + "/" + uuidv4()),
          imageUrl,
          "data_url"
        );
        tempImage = await getDownloadURL(response.ref);
      }
      await addDoc(collection(dbService, email), {
        check: false,
        text,
        image: tempImage,
        createdAt: Date.now(),
      });
      setIsUpload(false);
    } catch (err) {
      console.log(err);
      alert("Upload failed.");
      setIsUpload(false);
    }
    setText("");

    setImageUrl("");
  };

  const onImageSelect = (e: any) => {
    console.log(e.target.files);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (finishedEvnet) => {
      const {
        currentTarget: { result },
      }: any = finishedEvnet;
      console.log(result);
      setImageUrl(result);
    };
  };

  const closePreview = () => {
    setImageUrl("");
  };
  return (
    <>
      <form
        className="bg-white flex items-center w-[100%] h-[45px] fixed bottom-0"
        onSubmit={addListItem}>
        <input
          type="file"
          name=""
          id="img"
          className="hidden"
          onChange={onImageSelect}
        />
        <label htmlFor="img" className="p-2 cursor-pointer">
          <BsPlusSquare className="text-[24px]" />
        </label>

        <div
          className={`absolute top-[-300px] left-[50%] translate-x-[-50%] w-[100%] h-[300px] bg-slate-400 opacity-80 ${
            imageUrl === "" ? "hidden" : ""
          }`}>
          <img
            src={imageUrl}
            alt=""
            className="object-contain w-[100%] h-[300px]"
          />
          <button
            type="button"
            className="absolute top-0 right-0 p-1"
            onClick={closePreview}>
            <IoMdCloseCircleOutline className="text-[30px] text-[red]" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Enter content."
          className="grow"
          onChange={textChange}
          value={text}
        />
        <button
          type="submit"
          className="border-[#3F4756] border-[2px] rounded-[4px] px-2 mx-2">
         Input
        </button>
      </form>

      {isUpload ? (
        <div className="bg-[rgba(0,0,0,0.8)] text-white text-[24px] w-[300px] h-[100px] rounded-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center">
          <strong>Uploading</strong>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ToDoListInputForm;