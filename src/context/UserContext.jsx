import { createContext } from "react";
import React, { useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ email: "", auth: false });
  const [users, setUsers] = useState([{ email: "a@a.com", password: "a" }]);
  // Login updates the user data with a name parameter

  const registering = (element) => {
    let Eexists = false;
    users.map((a) => {
      if (a.email === element.email) {
        alert("email already exist");
        Eexists = true;
      }
    });
    if (!Eexists) {
      setUsers((users) => [...users, element]);
      setUser((user) => ({
        email: element.email,
        auth: true,
      }));
    } else console.log("email already exist");
  };
  const login = (element) => {
    let Eexists = false;
    let Pcorrect = false;
    let EePfalse;
    users.map((a) => {
      if (a.email === element.email) {
        console.log("emai exists");
        Eexists = true;
        a.password === element.password && Eexists
          ? (Pcorrect = true)
          : (EePfalse = false);
      }
    });
    console.log("Eexists: " + Eexists + " Pcorrect:" + Pcorrect);
    if (!EePfalse) console.log("Wrong Password");
    if (Eexists && Pcorrect) {
      setUser((user) => ({
        email: element.email,
        auth: true,
      }));
    }
  };

  // Logout updates the user data to default
  const logout = () => {
    console.log("logout clicked");
    setUser((user) => ({
      email: "",
      auth: false,
    }));
  };
  return (
    <UserContext.Provider value={{ users, user, registering, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
