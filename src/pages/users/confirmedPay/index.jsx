import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGoogle,
  faWindows,
  faYandex,
  faYandexInternational,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import {
  faTicket,
  faTicketAlt,
  faTicketSimple,
} from "@fortawesome/free-solid-svg-icons";

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

function ConfirmedAndPay() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [card, setCard] = useState({});
  const [countdown, setCountdown] = useState({});

  useEffect(() => {
    axios("http://localhost:5011/api/Event/GetByIdEvent/" + id)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => console.error("Error fetching event data:", err));
  }, [id]);

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

  // console.log(card.tickets[0].price);
  return (
    <>
      <div className={style.bookNowPage}>
        <section className={style.headerHelp}>
          <div className={style.navigate}>
            <p>
              <Link to="/" className={style.home}>
                Home
              </Link>
              /<Link className={style.faq}>Checkout</Link>
            </p>
          </div>
        </section>

        <section className={style.faqAndAnswerSection}>
          <div className={style.titleSection}>
            <div className={style.imageLogo}>
              <img
                width={55}
                height={55}
                src="https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/confirmed.png"
                alt=""
              />
            </div>
            <div className={style.title}>
              <h1>Booking Confirmed</h1>
            </div>
            <div className={style.desp}>
              <p>
                We are pleased to inform you that your reservation request has
                been received and confirmed.
              </p>
            </div>
            <div className={style.add}>
              <div className={style.addTitle}>
                <p>Add</p>
              </div>
              <div className={style.btnAdd}>
                <button>
                  <FontAwesomeIcon icon={faWindows} className={style.icon} />
                </button>
              </div>
              <div className={style.btnAdd}>
                <button>
                  <FontAwesomeIcon icon={faApple} className={style.icon} />
                </button>
              </div>
              <div className={style.btnAdd}>
                <button>
                  <FontAwesomeIcon icon={faGoogle} className={style.icon} />
                </button>
              </div>
              <div className={style.btnAdd}>
                <button>
                  <FontAwesomeIcon
                    icon={faYandexInternational}
                    className={style.icon}
                  />
                </button>
              </div>
            </div>

            <div className={style.eventDetailBox}>
              <div className={style.eventDetails}>
                <div className={style.image}>
                  <img src={card.image?.imageUrl} alt="" />
                </div>

                <div className={style.eventTitle}>
                  <div className={style.eventName}>
                    <h6>{card.name}</h6>
                  </div>

                  <div className={style.eventDate}>
                    <p>
                      {formattedDateTime}. Duration{" "}
                      {formatDuration(card.duration)}{" "}
                    </p>
                  </div>
                  <div className={style.userAbout}>
                    <p>John Doe</p>
                  </div>
                  <div className={style.ticket}>
                    <p>
                      <FontAwesomeIcon icon={faTicket} /> 1 xTicket
                    </p>
                  </div>

                  <div className={style.total}>
                    {/* <p>Total: ${card?.tickets[0]?.price}</p> */}
                  </div>
                </div>
              </div>
              <div className={style.viewTicket}>
                <button>
                  <FontAwesomeIcon icon={faTicket} /> View Ticket
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ConfirmedAndPay;
