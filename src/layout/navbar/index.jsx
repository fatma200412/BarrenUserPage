import { Link } from "react-router-dom";
import style from "./index.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/header/logo (1).svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // function toggleMenu() {
  //   setMenuOpen(!menuOpen);
  //   console.log("Menu Open:", !menuOpen);
  // }
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <nav>
        <header className={style.header}>
          <div className="container-fluid">
            <div className={style.row}>
              <div className={style.barAndLogo}>
                <button className={style.iconBtn} onClick={showDrawer}>
                  <MenuIcon className={style.barIcon} />
                </button>
                <Link to="/">
                  <img
                    className={style.logo}
                    src={logo}
                    alt="Logo"
                    width={170}
                  />
                </Link>
              </div>
              <Drawer
                title="Barren"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                extra={
                  <>
                    <Space>
                      <Button onClick={onClose}>X</Button>
                    </Space>
                  </>
                }
              >
                <div className={style.menuBarCreateEventBtn}>
                  <button className={style.calendar}>
                    <CalendarMonthIcon
                      style={{
                        marginRight: "10px",
                        fontSize: "19px",
                        color: "white",
                      }}
                    />
                    Create Events
                  </button>
                </div>

                <div className={style.resMenuNaviget}>
                  <Link to="/" className={style.iconAndNav}>
                    Home
                  </Link>
                  <Link to="/exploreEvents" className={style.iconAndNav}>
                    Explore Events
                  </Link>
                  <Link to="/help" className={style.iconAndNav}>
                    FAQ
                  </Link>
                  <Link to="/contactUs" className={style.iconAndNav}>
                    Contact Us
                  </Link>
                </div>

                <div className={style.findMe}>
                  <h2>Find me on</h2>
                  <div className={style.links}>
                    <button>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FacebookIcon />
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon />
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://x.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterIcon />
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <YouTubeIcon />
                      </a>
                    </button>
                    <button>
                      <a
                        href="https://google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LanguageIcon />
                      </a>
                    </button>
                  </div>
                </div>

                <p>Some contents...</p>
                <p>Some contents...</p>
              </Drawer>

              <div className={style.iconAndBtns}>
                <div className={style.naviget}>
                  <Link to="/" className={style.iconAndNav}>
                    Home
                  </Link>
                  <Link to="/exploreEvents" className={style.iconAndNav}>
                    Explore Events
                  </Link>
                  <Link to="/help" className={style.iconAndNav}>
                    FAQ
                  </Link>
                  <Link to="/contactUs" className={style.iconAndNav}>
                    Contact Us
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
                  <button className={`${style.btns} ${style.light}`}>
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
