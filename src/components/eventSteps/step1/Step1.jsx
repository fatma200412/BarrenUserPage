import React from "react";
import style from "./index.module.css";

import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import stepIcon1 from "../../../assets/images/steps/step1/step-icon-1.png";
import stepIcon2 from "../../../assets/images/steps/step1/step-icon-2.png";
import stepIcon3 from "../../../assets/images/steps/step1/step-icon-3.png";

function Step1() {
  return (
    <>
      <div className={style.step}>
        <div className={style.title}>
          <p>Sign up for free and create your event easily in minutes.</p>
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
                    Sign up for free
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
                    Built-in video conferencing platform to save you time and
                    cost.
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
                    Online Events
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
                    Built-in video conferencing platform to save you time and
                    cost.
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
                    Online Events
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
                    Built-in video conferencing platform to save you time and
                    cost.
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

export default Step1;
