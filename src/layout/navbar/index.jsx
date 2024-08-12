import { Link } from "react-router-dom";
import style from "./index.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/header/logo (1).svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import ExploreIcon from "@mui/icons-material/Explore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";

function Navbar() {
  let [mode, setMode] = useState(false);
  function changeMode(e) {
    setMode(!mode);
    if (!mode) {
      e.target.classList.replace("light", "dark");
      document.body.style.backgroundColor = "black";
      header.style.backgroundColor = "black";
    } else {
      e.target.classList.replace("dark", "light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <nav>
        <header className={style.header}>
          <div className="container-fluid">
            <div className={style.row}>
              <div className={style.barAndLogo}>
                {/* <button className={style.iconBtn}>
                  <MenuIcon className={style.barIcon} />
                </button> */}
                <Link to="/">
                  <img className={style.logo} src={logo} alt="" />
                </Link>
                {/* <img src={logo} alt="" /> */}
              </div>

              <div className={style.iconAndBtns}>
                <div className={style.naviget}>
                  <Link to="/" className={style.iconAndNav}>
                    Home
                  </Link>
                  <Link to="/exploreEvents" className={style.iconAndNav}>
                    Explore Events
                  </Link>
                  <Link to="/" className={style.iconAndNav}>
                    Pricing
                  </Link>
                  <Link to="/" className={style.iconAndNav}>
                    Blog
                  </Link>
                  <Link to="/" className={style.iconAndNav}>
                    Help
                  </Link>
                  <Link to="/" className={style.iconAndNav}>
                    Pages
                  </Link>

                  <button className={style.calendar}>
                    <CalendarMonthIcon
                      style={{
                        marginRight: "10px",
                        fontSize: "20px",
                        color: "white",
                      }}
                    />
                    Create Events
                  </button>
                </div>
                <div className={style.btns}>
                  <button className={`${style.btns} ${style.user} `}>
                    <AccountCircleIcon style={{ fontSize: "20px" }} />
                  </button>
                  <button
                    className={`${style.btns} ${style.light}`}
                    onClick={(e) => changeMode(e)}
                  >
                    <Brightness7Icon style={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}

export default Navbar;
