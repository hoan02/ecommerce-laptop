import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar.jsx";

const App = () => {
  return (
    <div className="app">
      <div className="body">
        <Sidebar />
      </div>
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
