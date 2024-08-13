import React from "react";
import style from "./index.module.css";

import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import stepIcon1 from "../../../assets/images/steps/step3/step-icon-7.png";
import stepIcon2 from "../../../assets/images/steps/step3/step-icon-8.png";
import stepIcon3 from "../../../assets/images/steps/step3/step-icon-9.png";

function Step3() {
  return (
    <>
      <div className={style.step}>
        <div className={style.title}>
          <p>Use Barren to host any types of online events for free.</p>
        </div>
        <div className={style.iconsAndTitle}>
          <Grid container spacing={2} className={style.grid}>
            <Grid xs={12} sm={12} md={4} lg={4}>
              <Card
                sx={{
                  maxWidth: 400,
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src={stepIcon1}
                  alt="logo"
                  width={75}
                  height={75}
                  style={{ padding: "20px 10px 2px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      marginBottom: "18px",
                    }}
                  >
                    Free event hosting
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#717171",
                      fontSize: "14px",
                      fontWeight: "400",
                      textDecoration: "none solid rgb(113, 113, 113)",
                    }}
                  >
                    Use Eventbookings to host any types of online events for
                    free.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4}>
              <Card
                sx={{
                  maxWidth: 400,
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src={stepIcon2}
                  alt="logo"
                  width={75}
                  height={75}
                  style={{ padding: "20px 10px 2px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      marginBottom: "18px",
                    }}
                  >
                    Built-in video conferencing platform
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#717171",
                      fontSize: "14px",
                      fontWeight: "400",
                      textDecoration: "none solid rgb(113, 113, 113)",
                    }}
                  >
                    No need to integrate with ZOOM or other 3rd party apps, use
                    our built-in video conferencing platform for your events.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} sm={12} md={4} lg={4}>
              <Card
                sx={{
                  maxWidth: 400,
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src={stepIcon3}
                  alt="logo"
                  width={75}
                  height={75}
                  style={{ padding: "20px 10px 2px" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      marginBottom: "18px",
                    }}
                  >
                    Connect your attendees with your event
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "#717171",
                      fontSize: "14px",
                      fontWeight: "400",
                      textDecoration: "none solid rgb(113, 113, 113)",
                    }}
                  >
                  Use our live engagement tools to connect with attendees during the event.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Step3;
