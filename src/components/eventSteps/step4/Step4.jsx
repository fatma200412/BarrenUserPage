import React from "react";
import style from "./index.module.css";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import stepIcon1 from "../../../assets/images/steps/step4/step-icon-10.png";
import stepIcon2 from "../../../assets/images/steps/step4/step-icon-11.png";
import stepIcon3 from "../../../assets/images/steps/step4/step-icon-12.png";

function Step4() {
  return (
    <>
      <div className={style.step}>
        <div className={style.title}>
          <p>Create more events and earn more money.</p>
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
                    Promote your events on social media & email
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
                    Use our event scheduling features to create multiple
                    sessions for your events & earn more money.
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
                    Clone past event to create similar events
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
                    Use our event cloning feature to clone past event and create
                    a new one easily within a few clicks.
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
                    Get support like nowhere else
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
                    Our dedicated on-boarding coach will assist you in becoming
                    an expert in no time.
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

export default Step4;
