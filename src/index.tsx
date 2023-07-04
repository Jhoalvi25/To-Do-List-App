import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStoreWithMiddleware } from "./redux/store";
import "./index.css";
import App from "./App";
import rootReducer from "./redux/reducers";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() )}>
      <App />
    </Provider>
  </React.StrictMode>
);
