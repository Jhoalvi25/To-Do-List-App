import { useEffect, useState } from "react";
import { authService } from "./firebase/config";
import Home from "./routes/Home";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "./redux/actions/user_action";
import ToDoListView from "./components/ToDoListView";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user: any) => {
      dispatch(SetUser(user));
      setInit(true);
    });
  }, []);
  return (
    <div>
      {init ? (
        Object.keys(user).length !== 0 ? (
          <ToDoListView />
        ) : (
          <Home />
        )
      ) : (
        <>Loading</>
      )}
    </div>
  );
}

export default App;
