import React, { createContext, useState, useEffect } from "react";

export const UserAuth = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    // debugger;
    // Load login state and role from localStorage if available
    const storedIsLoginUser = localStorage.getItem("userPageInfo") === "true";
    const storedUserRole = localStorage.getItem("userRole");

    console.log("Stored isLoginAdmin:", storedIsLoginUser);
    console.log("Stored userRole:", storedUserRole);

    //     if (storedIsLoginAdmin) {
    //       setIsLoginAdmin(true);
    //     }

    //     if (storedUserRole) {
    //       setUserRole(storedUserRole);
    //     }

    setIsLoginUser(storedIsLoginUser);
    setUserRole(storedUserRole);
  }, []);

  console.log(isLoginUser);
  return (
    <UserAuth.Provider
      value={{ isLoginUser, setIsLoginUser, userRole, setUserRole }}
    >
      {children}
    </UserAuth.Provider>
  );
};
