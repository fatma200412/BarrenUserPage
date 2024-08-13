import React from "react";
import style from "./index.module.css";

import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import stepIcon1 from "../../../assets/images/steps/step2/step-icon-4.png";
import stepIcon2 from "../../../assets/images/steps/step2/step-icon-5.png";
import stepIcon3 from "../../../assets/images/steps/step2/step-icon-6.png";

function Step2() {
  return (
    <>
      <div className={style.step}>
        <div className={style.title}>
          <p>
            Use our multiple ticketing features & marketing automation tools to
            boost ticket sales.
          </p>
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
                    Use our intuitive event promotion tools to reach your target
                    audience and sell tickets.
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
                    Use early-bird discounts, coupons & group ticketing
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
                    Double your ticket sales using our built-in discounts,
                    coupons and group ticketing features.
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
                    Get paid quickly & securely
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
                    Use our PCI compliant payment gateways to collect your
                    payment securely.
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

export default Step2;
