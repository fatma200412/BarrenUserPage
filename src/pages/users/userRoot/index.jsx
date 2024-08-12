import { Outlet } from "react-router-dom";
import Navbar from "../../../layout/navbar";
import Login from "../login";
import { useSelector } from "react-redux";

function UserRoot() {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);

  return (
    <>
      {isLogin ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default UserRoot;
