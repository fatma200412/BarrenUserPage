import { Outlet } from "react-router-dom";
import Navbar from "../../../layout/navbar";
import Login from "../login";
import { useSelector } from "react-redux";
import Footer from "../../../layout/footer";

function UserRoot() {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log(isLogin);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* {isLogin ? <></> : <Login />} */}
    </>
  );
}

export default UserRoot;
