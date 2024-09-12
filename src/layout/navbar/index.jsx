import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import { Modal } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const ModalStyle = {
  position: "absolute",
  top: "150px",
  right: "0",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
  height: "auto",
  // display: "flex",
  // flexDirection: "column",
  // alignItems: "center",
};

function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false);

  // function toggleMenu() {
  //   setMenuOpen(!menuOpen);
  //   console.log("Menu Open:", !menuOpen);
  // }
  const user = useSelector((state) => state.user.userPageInfo);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  function handleLogout() {
    // localStorage.removeItem("isLogin");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sign Outed!",
          text: "Profile sign outed",
          icon: "success",
        });
        dispatch(logout());
        navigate("/login");
      }
    });
  }

  const userRoles = JSON.parse(localStorage.getItem("userInfo")).roles;
  console.log(user);

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
                  <h2>Follow us</h2>
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
                  </div>
                </div>
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
                  <button
                    className={`${style.btns} ${style.user} `}
                    onClick={handleOpen}
                  >
                    <AccountCircleIcon style={{ fontSize: "20px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </nav>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={ModalStyle}>
            <Box className={style.title}>
              {user != {} && (
                <>
                  <img
                    src={user.image}
                    alt="Profile"
                    className={style.profileImageLarge}
                  />

                  <Typography
                    variant="h6"
                    component="h2"
                    className={style.profileName}
                  >
                    {user.firstName} {user.lastName}
                  </Typography>

                  <p className={style.profileEmail}>{user.email}</p>
                </>
              )}
            </Box>

            {user == {} ? (
              <>
                <div className={style.btnModal}>
                  <button
                    onClick={() => navigate("/myProfile")}
                    className={style.btn}
                  >
                    My Profile
                  </button>
                  <button onClick={handleLogout} className={style.btn}>
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={style.btnModal}>
                  <Link to="/login" className={style.iconAndNav}>
                    Login
                  </Link>
                  <br />
                  <Link to="/register" className={style.iconAndNav}>
                    Register
                  </Link>
                </div>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Navbar;
