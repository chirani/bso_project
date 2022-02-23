import "./App.scss";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./comps/Header";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user.auth ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user.auth ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
