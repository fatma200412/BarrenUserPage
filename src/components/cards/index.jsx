import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.module.css";
import {
  faRightLong,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

function Cards() {
  return (
    <div className={style.cardsSection}>
      <Grid container spacing={5} style={{ marginBottom: "40px" }}>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>{" "}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>{" "}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>{" "}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>{" "}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>{" "}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>{" "}
        <Grid xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 360, position: "relative" }}>
            <CardMedia
              sx={{ height: 200 }}
              className={style.cardImg}
              image="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "50px",
                }}
              >
                A New Way Of Life
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                AUD $100.00*
              </Typography>
            </CardContent>
            <button className={style.markBtn}>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
            <div className={style.cardFooter}>
              <p>
                <FontAwesomeIcon icon={faCalendar} /> 15 Apr . Sat, 11:20 PM
              </p>

              <p>
                <FontAwesomeIcon icon={faClock} /> 2h
              </p>
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className={style.cardSectionAllBtn}>
        <button>Browse All</button>
      </div>
    </div>
  );
}

export default Cards;
