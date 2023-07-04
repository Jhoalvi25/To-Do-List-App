import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dbService } from "../firebase/config";
import { SetContent } from "../redux/actions/content_action";
import Overlay from "./Overlay";
import Sidebar from "./Sidebar";
import ToDoListContent from "./ToDoListContent";
import ToDoListHeader from "./ToDoListHeader";
import ToDoListInputForm from "./ToDoListInputForm";
const ToDoListView = () => {
  const email = useSelector((state: any) => state.user.email);
  const dispatch = useDispatch();
  useEffect(() => {
    const q = query(collection(dbService, email), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (doc: any) => {
      dispatch(SetContent(doc.docs.map((d: any) => ({ ...d.data(), id: d.id }))));
    });
  }, []);
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#B7C9EB] text-[#3F4756] relative">
      <ToDoListHeader />
      <ToDoListContent />
      <ToDoListInputForm />
      <Overlay />
      <Sidebar />
    </div>
  );
};

export default ToDoListView;