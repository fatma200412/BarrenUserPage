import React from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  const rootStyle = {
    display: "flex",
    padding: "12px",
    flexDirection: "row",
    "@media (max-width: 600px)": {
      flexDirection: "column-reverse",
    },
    // border: "1px solid grey",
    marginTop: "20px",
    backgroundColor: "white",
  };

  const contactInfoStyle = {
    backgroundColor: "#4CAF50",
    backgroundImage: `url("https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/sign_bg.jpg")`,
    backgroundSize: "cover", // Optional: Adjust background image size
    backgroundPosition: "center",
    color: "#fff",
    padding: "50px",
  };

  const formContainerStyle = {
    padding: "3px",
  };

  const textFieldStyle = {
    marginBottom: "16px",
  };

  const submitButtonStyle = {
    backgroundColor: "#6ac045",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#6ac055",
    },
    padding: "10px",
  };

  const infoIcon = {
    marginBottom: "15px",
  };

  return (
    <>
      <div className={style.faqPage}>
        <section className={style.headerHelp}>
          <div className={style.navigate}>
            <p>
              <Link to="/" className={style.home}>
                Home
              </Link>{" "}
              /<span className={style.faq}>Contact Us </span>
            </p>
          </div>
        </section>

        <section className={style.faqAndAnswerSection}>
          <div className={style.faqSection}>
            <div className={style.title}>
              <h1>Contact Us</h1>
              <p>Have any questions? We'd love to hear from you.</p>
            </div>

            {/* <Grid container spacing={2}>
              <Grid item xs={12} md={6} className={style.grid1}>
                <div></div>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid> */}

            <Grid container spacing={2} sx={rootStyle}>
              <Grid item xs={12} md={4} sx={contactInfoStyle}>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "50px" }}>
                  Fill out the form and our team will get back to you soon.
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" sx={infoIcon}>
                    <FontAwesomeIcon icon={faPhone} /> +1(000)00-00000
                  </Typography>
                  <Typography variant="body2" sx={infoIcon}>
                    <FontAwesomeIcon icon={faEnvelope} /> contact@barren.com
                  </Typography>
                  <Typography variant="body2" sx={infoIcon}>
                    <FontAwesomeIcon icon={faInfoCircle} /> Help Center
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8} sx={formContainerStyle}>
                <form noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom>
                        First Name
                      </Typography>
                      <TextField
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom>
                        Last Name
                      </Typography>
                      <TextField
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {" "}
                      <Typography variant="h6" gutterBottom>
                        Email
                      </Typography>
                      <TextField
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {" "}
                      <Typography variant="h6" gutterBottom>
                        Phone
                      </Typography>
                      <TextField
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      {" "}
                      <Typography variant="h6" gutterBottom>
                        Message
                      </Typography>
                      <TextField
                        sx={textFieldStyle}
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={submitButtonStyle}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;
