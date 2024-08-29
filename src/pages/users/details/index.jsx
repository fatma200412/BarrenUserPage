import React, { useState, useEffect } from "react";
import style from "./index.module.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLong,
  faCalendar,
  faClock,
  faLocationDot,
  faBookBookmark,
  faShare,
  faShareAlt,
  faPerson,
  faPersonFalling,
  faCircleUser,
  faCalendarDay,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Grid from "@mui/material/Grid";
import { faAccessibleIcon } from "@fortawesome/free-brands-svg-icons";
import Cards from "../../../components/cards";

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

function Details() {
  const { id } = useParams();

  const [card, setCard] = useState({});
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    axios("http://localhost:5011/api/Event/GetByIdEvent/" + id).then((res) => {
      console.log(res.data);
      setCard(res.data);
    });
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (card.beginTime) {
        const eventTime = new Date(card.beginTime).getTime();
        const currentTime = new Date().getTime();
        const timeRemaining = eventTime - currentTime;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [card.beginTime]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Format day of the week, month, day, year, and time
    const options = {
      month: "short", // 'Apr'
      day: "2-digit", // '30'
      weekday: "short", // 'Sat'
      year: "numeric", // '2022'
      hour: "2-digit", // '11'
      minute: "2-digit", // '30'
      hour12: true, // 'AM/PM'
    };

    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const formattedDateTime = date.toLocaleString("en-US", options);

    return { month, day, formattedDateTime };
  };

  const { month, day, formattedDateTime } = card.beginTime
    ? formatDate(card.beginTime)
    : { month: "", day: "", formattedDateTime: "" };

  console.log(formattedDateTime.split(","));
  return (
    <>
      <div className={style.detailpage}>
        <section className={style.headerHelp}>
          <div className={style.navigate}>
            <p>
              <Link to="/" className={style.home}>
                Home
              </Link>
              /
              <Link to="/exploreEvents" className={style.home}>
                Explore Events
              </Link>
              /
              <Link to="/" className={style.faq}>
                Event Detail View
              </Link>
            </p>
          </div>
        </section>

        <section className={style.faqAndAnswerSection}>
          <div className={style.titleSection}>
            <div className={style.calendar}>
              <div className={style.month}>{month}</div>
              <div className={style.day}>{day}</div>
            </div>

            <div className={style.title}>
              <h1>{card.name}</h1>
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> {card?.type?.name}{" "}
                Event{" "}
                <span style={{ color: "black", fontSize: "20px" }}>.</span>{" "}
                Starts on {formattedDateTime}{" "}
                <span style={{ color: "black", fontSize: "20px" }}>.</span>{" "}
                {formatDuration(card.duration)}
              </p>
            </div>
          </div>
        </section>

        <section className={style.aboutDetail}>
          <div className={style.aboutTitleAndPicture}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <div className={style.imageEvent}>
                  <img src={card.image?.imageUrl} alt="" />
                </div>

                <div className={style.saveAndShare}>
                  <div className={style.save}>
                    <button>
                      <FontAwesomeIcon icon={faBookmark} /> Save
                    </button>
                  </div>

                  <div className={style.share}>
                    <button>
                      <FontAwesomeIcon icon={faShareAlt} /> Share
                    </button>
                  </div>
                </div>

                <div className={style.desp}>
                  <h4>About This Event</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt odio odit, deleniti perferendis consequuntur quia unde
                    aperiam ea enim temporibus fuga eum saepe pariatur,
                    obcaecati illo neque? Quis laboriosam possimus porro cum
                    fuga? Ad, magnam debitis, cum vero molestiae, ea possimus
                    autem reprehenderit doloremque voluptate consequuntur iste
                    ratione omnis quibusdam est praesentium. Obcaecati aut at
                    repellat quae nemo mollitia quisquam hic omnis aperiam
                    suscipit nihil sit, fuga, consequatur illum dolore possimus
                    cupiditate recusandae fugit facilis commodi praesentium
                    error doloribus deserunt magnam? Nulla, possimus sequi
                    consequatur eum deserunt delectus ullam quidem rerum maiores
                    quisquam nemo, commodi dicta esse, sunt quam facere?
                  </p>

                  <p>{card.image?.description}</p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={style.eventDetailBox}>
                  <div className={style.title}>
                    <h2>Event Details</h2>
                  </div>

                  <div className={style.countDown}>
                    <div className={style.days}>
                      <h6> {countdown.days}</h6>
                      <p>DAYS</p>
                    </div>

                    <div className={style.hours}>
                      <h6> {countdown.hours}</h6>
                      <p>HOURS</p>
                    </div>

                    <div className={style.minutes}>
                      <h6> {countdown.minutes}</h6>
                      <p>MINUTES</p>
                    </div>

                    <div className={style.seconds}>
                      <h6>{countdown.seconds}</h6>
                      <p>SECONDS</p>
                    </div>
                  </div>

                  <div className={style.organisedBy}>
                    <div className={style.icons}>
                      <FontAwesomeIcon
                        icon={faCircleUser}
                        className={style.icon}
                      />
                    </div>
                    <div className={style.about}>
                      <p className={style.titleAbout}>Organised by</p>
                      <p> The Teeny Rabbit</p>
                      <button>View Profile</button>
                    </div>
                  </div>

                  <div className={style.dateAndTime}>
                    <div className={style.icons}>
                      <FontAwesomeIcon
                        icon={faCalendarDay}
                        className={style.icon}
                      />
                    </div>
                    <div className={style.about}>
                      <p className={style.titleAbout}>Date and Time</p>
                      <p> {formattedDateTime} </p>
                      <button>
                        {" "}
                        <FontAwesomeIcon icon={faCalendarDays} /> Add too
                        Calendar
                      </button>
                    </div>
                  </div>

                  <div className={style.location}>
                    <div className={style.icons}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className={style.icon}
                      />
                    </div>
                    <div className={style.about}>
                      <p className={style.titleAbout}>Location</p>
                      <p>
                        {card.address?.addres}, {card.address?.city},{" "}
                        {card.address?.country}{" "}
                      </p>
                      <button>
                        {" "}
                        <FontAwesomeIcon icon={faLocationDot} /> View Map
                      </button>
                    </div>
                  </div>

                  <div className={style.ticketAbout}>
                    <h3>Ticket</h3>
                    <hr style={{ color: "#e3e3e3", marginBottom: "10px" }} />
                    <div className={style.ticketPrice}>
                      <p>1x Ticket</p>
                      <h5>AUD $0.00</h5>
                    </div>
                    <div className={style.bookNowBtn}>
                      <button>Book Now</button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>

        <Cards />
      </div>
    </>
  );
}

export default Details;
