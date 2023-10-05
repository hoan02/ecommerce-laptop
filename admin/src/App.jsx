import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/my-account"
            element={
              <RequireAuth loginPath="/login">{<MyAccount />}</RequireAuth>
            }
          />
        </Routes>
      </div>
      <ToastContainer autoClose={2000} draggablePercent={60} />
    </div>
  );
};

export default App;
