import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./index.module.css";
import {
  faRightLong,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import Grid from "@mui/system/Unstable_Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Cards from "../../../components/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import venueEvents from "../../../assets/images/sliders/venue-events.png";
import onlineClass from "../../../assets/images/sliders/online-class.png";
import talkShow from "../../../assets/images/sliders/talk-show.png";
import trainingWorkshop from "../../../assets/images/sliders/training-workshop.png";
import webinar from "../../../assets/images/sliders/webinar.png";
import featureIcon1 from "../../../assets/images/featureOverloadYooNeed/feature-icon-1.png";
import featureIcon2 from "../../../assets/images/featureOverloadYooNeed/feature-icon-2.png";
import featureIcon3 from "../../../assets/images/featureOverloadYooNeed/feature-icon-3.png";
import featureIcon4 from "../../../assets/images/featureOverloadYooNeed/feature-icon-4.png";
import featureIcon5 from "../../../assets/images/featureOverloadYooNeed/feature-icon-5.png";
import featureIcon6 from "../../../assets/images/featureOverloadYooNeed/feature-icon-6.png";
import featureIcon7 from "../../../assets/images/featureOverloadYooNeed/feature-icon-7.png";
import featureIcon8 from "../../../assets/images/featureOverloadYooNeed/feature-icon-8.png";
import featureIcon9 from "../../../assets/images/featureOverloadYooNeed/feature-icon-9.png";
import featureIcon10 from "../../../assets/images/featureOverloadYooNeed/feature-icon-10.png";
import featureIcon11 from "../../../assets/images/featureOverloadYooNeed/feature-icon-11.png";
import featureIcon12 from "../../../assets/images/featureOverloadYooNeed/feature-icon-12.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useState } from "react";
import Step1 from "../../../components/eventSteps/step1/Step1";
import Step2 from "../../../components/eventSteps/step2/Step2";
import Step3 from "../../../components/eventSteps/step3/Step3";
import Step4 from "../../../components/eventSteps/step4/Step4";

import sponsor1 from "../../../assets/images/eventsOrganisations/sponsor-1.png";
import sponsor2 from "../../../assets/images/eventsOrganisations/sponsor-2.png";
import sponsor3 from "../../../assets/images/eventsOrganisations/sponsor-3.png";
import sponsor4 from "../../../assets/images/eventsOrganisations/sponsor-4.png";
import sponsor5 from "../../../assets/images/eventsOrganisations/sponsor-5.png";
import sponsor6 from "../../../assets/images/eventsOrganisations/sponsor-6.png";
import sponsor7 from "../../../assets/images/eventsOrganisations/sponsor-7.png";

function Home() {
  const [activeTab, setActiveTab] = useState("step1");
  const [contentHeight, setContentHeight] = useState("auto");

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Set height to auto first to calculate the full height needed
    setContentHeight("auto");

    // After a small delay, set the correct height to animate
    setTimeout(() => {
      const contentElement = document.querySelector(`.${style.tabContent}`);
      if (contentElement) {
        setContentHeight(`${contentElement.scrollHeight}px`);
      }
    }, 10);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "step1":
        return <Step1 />;
      case "step2":
        return <Step2 />;
      case "step3":
        return <Step3 />;
      case "step4":
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  return (
    <>
      <div className={style.homePage}>
        <header className={style.headerHome}>
          <h1>
            The Easiest and Most Powerful Online Event Booking and Ticketing
            System
          </h1>
          <p>
            Barren is an all-in-one event ticketing platform for event
            organisers, promoters, and managers. Easily create, promote and
            manage your events of any type and size.
          </p>
          <button>
            Create Event {"   "}
            <FontAwesomeIcon icon={faRightLong} />
          </button>
        </header>
        <section className={style.exploreEventsSectionFilterAndCards}>
          <Cards />
        </section>

        <section className={style.onlineAndVenueEvents}>
          <div className={style.swiperEvents}>
            <div className={style.title}>
              <h1>Host Engaging Online and Venue Events with Barren</h1>
            </div>
            <div className={style.des}>
              <p>
                Organise venue events and host online events with unlimited
                possibilities using our built-in virtual event platform. Build a
                unique event experience for you and your attendees.
              </p>
            </div>
            <div className={style.sliders}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={15}
                slidesPerView={3}
                // navigation={{
                //   nextEl: ".swiper-button-next",
                //   prevEl: ".swiper-button-prev",
                // }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                <Grid container spacing={2} style={{ marginBottom: "40px" }}>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          border: "1px solid #c1c2c3",
                          boxShadow: "none",
                          padding: "10px",
                        }}
                      >
                        <img
                          src={venueEvents}
                          alt="logo"
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
                              marginBottom: "12px",
                            }}
                          >
                            Venue Events
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
                            Create outstanding events, attract attendees and
                            sell more tickets.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          padding: "10px",
                          maxWidth: 400,
                          border: "1px solid #c1c2c3",
                          boxShadow: "none",
                        }}
                      >
                        <img
                          src={webinar}
                          alt="logo"
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
                              marginBottom: "12px",
                            }}
                          >
                            Webinar
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
                            Webinars tend to be one-way events. Barren helps to
                            make them more engaging.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          // padding: "10px",
                          maxWidth: 400,
                          border: "1px solid #c1c2c3",
                          boxShadow: "none",
                        }}
                      >
                        <img
                          src={trainingWorkshop}
                          alt="logo"
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
                              marginBottom: "12px",
                            }}
                          >
                            Training & Workshop
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
                            Create and host profitable workshops and training
                            sesions online, sell tickets and earn money. sell
                            more tickets.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          padding: "10px",
                          maxWidth: 400,
                          border: "1px solid #c1c2c3",
                          boxShadow: "none",
                        }}
                      >
                        <img
                          src={onlineClass}
                          alt="logo"
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
                              marginBottom: "12px",
                            }}
                          >
                            Online Class
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
                            Try our e-learning template to create a fantastic
                            e-learning event page and drive engagement.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </Grid>

                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          padding: "10px",
                          maxWidth: 400,
                          border: "1px solid #c1c2c3",
                          boxShadow: "none",
                        }}
                      >
                        <img
                          src={talkShow}
                          alt="logo"
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
                              marginBottom: "12px",
                            }}
                          >
                            Talk Show
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
                            Use our intutive built-in event template to create
                            and host an engagement Talk Show.
                          </Typography>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  </Grid>
                </Grid>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
              </Swiper>
            </div>
          </div>
        </section>

        <section className={style.featureOverloadYouNeed}>
          <div className={style.headingDesAndIcons}>
            <div className={style.title}>
              <h1>No Feature OverLoad, Get Exactly What You Need</h1>
            </div>
            <div className={style.des}>
              <p>
                As well as being the most affordable online-based event
                registration tool and one of the best online event ticketing
                systems in Australia, Barren is super easy-to-use and built with
                a simplistic layout which is totally convenient for the
                organisers to operate.
              </p>
            </div>
            <div className={style.cards}>
              <Grid container spacing={2} style={{ marginTop: "40px" }}>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon1}
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
                          marginBottom: "12px",
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
                        Built-in video conferencing platform to save you time
                        and cost.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon2}
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
                          marginBottom: "12px",
                        }}
                      >
                        Venue Event
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
                        Easy-to-use features to create and manage your venue
                        events.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon3}
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
                          marginBottom: "12px",
                        }}
                      >
                        Engaging Event Page
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
                        Create engaging event pages with your logo and our hero
                        image collage gallery.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon4}
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
                          marginBottom: "12px",
                        }}
                      >
                        Marketing Automation
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
                        Use our marketing automation tools to promote your
                        events on social media and email.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon5}
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
                          marginBottom: "12px",
                        }}
                      >
                        Sell Tickets
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
                        Start monetising your online and venue events, sell
                        unlimited* tickets.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon6}
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
                          marginBottom: "12px",
                        }}
                      >
                        Networking
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
                        Engage your attendees with the speakers using our
                        interactive tools and build your own network.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon7}
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
                          marginBottom: "12px",
                        }}
                      >
                        Recording
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
                        Securely record your online events and save on the cloud
                        of your choice*.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon8}
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
                          marginBottom: "12px",
                        }}
                      >
                        Live Streaming
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
                        Livestream your online events on Facebook, YouTube and
                        other social networks.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon9}
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
                          marginBottom: "12px",
                        }}
                      >
                        Engagement Metrics
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
                        Track your event engagement metrics like visitors,
                        ticket sales, etc. from your dashboard.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon10}
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
                          marginBottom: "12px",
                        }}
                      >
                        Security & Support
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
                        Secure data and payment processing backed by a team
                        eager to see you succeed.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon11}
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
                          marginBottom: "12px",
                        }}
                      >
                        Reports & Analytics
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
                        Get useful reports and insights to boost your sales and
                        marketing activities.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 400,
                      border: "none",
                      boxShadow: "none",
                      backgroundColor: "#f5f7f9",
                    }}
                  >
                    <img
                      src={featureIcon12}
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
                          marginBottom: "12px",
                        }}
                      >
                        Mobile & Desktop App
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
                        Stay on top of things, manage and monitor your events
                        using the organiser app.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>

        <section className={style.eventSteps}>
          <div className={style.steps}>
            <div className={style.title}>
              <h1>Be a Star Event Host in 4 Easy Steps</h1>
            </div>
            <div className={style.des}>
              <p>
                Use early-bird discounts, coupons and group ticketing to double
                your ticket sale. Get paid quickly and securely.
              </p>
            </div>
            <div className={style.navigate}>
              <Grid container spacing={2} className={style.navTabs}>
                <Grid xs={12} md={6} lg={3}>
                  <button
                    onClick={() => setActiveTab("step1")}
                    className={activeTab === "step1" ? style.activeTab : ""}
                  >
                    Step 1
                    <br />
                    <span>Create Your Event</span>
                  </button>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <button
                    onClick={() => setActiveTab("step2")}
                    className={activeTab === "step2" ? style.activeTab : ""}
                  >
                    Step 2
                    <br />
                    <span> Sell Tickets and Get Paid</span>
                  </button>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <button
                    onClick={() => setActiveTab("step3")}
                    className={activeTab === "step3" ? style.activeTab : ""}
                  >
                    Step 3
                    <br />
                    <span>Finally,Host Your Event</span>
                  </button>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <button
                    onClick={() => setActiveTab("step4")}
                    className={activeTab === "step4" ? style.activeTab : ""}
                  >
                    Step 4
                    <br />
                    <span>Repeat and Grow</span>
                  </button>
                </Grid>

                <div
                  className={`${style.tabContent} ${
                    activeTab ? style.activeContent : ""
                  }`}
                  style={{ height: contentHeight }}
                >
                  {renderContent()}
                </div>
              </Grid>
            </div>
          </div>
        </section>

        <section className={style.organisationGlobe}>
          <div className={style.titleAndSlides}>
            <div className={style.title}>
              <h1>
                321+ events created by thousands of organisations around the
                globe
              </h1>
            </div>

            <div className={style.cards}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={15}
                slidesPerView={5}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor1}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor2}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor3}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor4}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>

                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor5}
                          width={250}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>

                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor6}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <SwiperSlide>
                      <Card
                        sx={{
                          maxWidth: 400,
                          boxShadow: "none",
                          padding: "10px",
                          backgroundColor: "#6ac045",
                        }}
                      >
                        <img
                          src={sponsor7}
                          alt="logo"
                          style={{ padding: "20px 10px 2px" }}
                        />
                      </Card>
                    </SwiperSlide>
                  </Grid>
                </Grid>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
