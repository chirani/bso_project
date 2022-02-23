import React from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
function Header() {
  const { logout } = React.useContext(UserContext);
  return (
    <div className="header">
      <div className="h-container">
        <a href="/">
          <h1 className="logo">BSO</h1>
        </a>
        <h3 className="logout" onClick={logout}>
          Logout
        </h3>
      </div>
    </div>
  );
}

export default Header;
