import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
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
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

function BookNow() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [card, setCard] = useState({});
  const [countdown, setCountdown] = useState({});
  const [quantity, setQuantity] = useState(1); // State for quantity

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [county, setCounty] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios("http://localhost:5011/api/Event/GetByIdEvent/" + id)
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => console.error("Error fetching event data:", err));
  }, [id]);

  const validate = () => {
    let errors = {};

    if (!county) errors.county = "Country is required";
    if (!city) errors.city = "City is required";
    if (!address) errors.address = "Address is required";
    if (!cardNumber) errors.cardNumber = "Card number is required";
    if (!expiryDate) errors.expiryDate = "Expiry date is required";
    if (!cvv) errors.cvv = "CVV is required";

    return errors;
  };

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

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decrement
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const getToken = () => {
    return JSON.parse(localStorage.getItem("userInfo")).token; // Replace 'token' with your actual key
  };

  // Handle update quantity in the API
  const handleSubmit = async () => {
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      try {
        const token = JSON.parse(localStorage.getItem("userInfo")).token; // Assume token exists in localStorage

        console.log({
          quantity,
          couponCodes: couponCode ? [couponCode] : [],
          payout: {
            cardNumber,
            cvv,
            expiryDate,
          },
          address: {
            country: county,
            city,
            addres: address, // Fix typo if needed
          },
        });

        await axios.post(
          `http://localhost:5011/api/Order/AddOrder/add/${id}`,
          {
            quantity,
            couponCodes: couponCode ? [couponCode] : [],
            payout: {
              cardNumber,
              cvv,
              expiryDate,
            },
            address: {
              country: county,
              city,
              addres: address, // Fix typo if needed
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Order placed successfully");
        navigate("/order-success"); // Optionally navigate to success page
      } catch (error) {
        console.error("Error placing order:", error);
        // Optionally display an error message to the user
      } finally {
        setIsSubmitting(false);
      }
    }

    navigate(`/cards/${id}/bookNow/confirmed/`);
  };

  return (
    <>
      <div className={style.bookNowPage}>
        <section className={style.headerHelp}>
          <div className={style.navigate}>
            <p>
              <Link to="/" className={style.home}>
                Home
              </Link>
              /
              <Link to="exploreEvents" className={style.home}>
                Explore Events
              </Link>
              /
              <Link
                onClick={() => {
                  navigate(-1);
                }}
                className={style.home}
              >
                Event Detail View
              </Link>
              /<Link className={style.faq}>Checkout</Link>
            </p>
          </div>
        </section>

        <section className={style.faqAndAnswerSection}>
          <div className={style.titleSection}>
            <div className={style.title}>
              <h1>Order Confirmation</h1>
            </div>
          </div>
        </section>

        <section className={style.aboutDetail}>
          <div className={style.aboutTitleAndPicture}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={8}
                style={{
                  backgroundColor: "white",
                  marginBottom: "70px",
                  border: "1px solid #e3e3e3",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #e3e3e3",
                    justifyContent: "space-between",
                    marginBottom: "25px",
                  }}
                >
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      padding: "12px",
                    }}
                  >
                    Billing information
                  </Typography>
                </div>

                <FormControl
                  variant="standard"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // alignItems: "center",
                    marginTop: "16px",
                    padding: "0px 25px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      xs={12}
                      md={6}
                      style={{ paddingRight: "10px", marginBottom: "20px" }}
                    >
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        County*
                      </Typography>
                      <TextField
                        variant="outlined"
                        // name="email"
                        value={county}
                        onChange={(e) => setCounty(e.target.value)}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          backgroundColor: "#f9f9f9",
                        }}
                        error={!!errors.county}
                        helperText={errors.county}
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      md={6}
                      style={{ paddingRight: "10px", marginBottom: "20px" }}
                    >
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        City*
                      </Typography>
                      <TextField
                        variant="outlined"
                        // name="email"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          backgroundColor: "#f9f9f9",
                        }}
                        error={!!errors.city}
                        helperText={errors.city}
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      style={{ paddingRight: "10px", marginBottom: "20px" }}
                    >
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        Address*
                      </Typography>
                      <TextField
                        variant="outlined"
                        // name="email"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          backgroundColor: "#f9f9f9",
                        }}
                        error={!!errors.address}
                        helperText={errors.address}
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={style.eventDetailBox}>
                  <div className={style.title}>
                    <h2>Billing information</h2>
                  </div>

                  <div className={style.eventDetails}>
                    <div className={style.image}>
                      <img src={card.image?.imageUrl} alt="" />
                    </div>

                    <div className={style.eventTitle}>
                      <div className={style.eventName}>
                        <h6>{card.name}</h6>
                      </div>

                      <div className={style.eventDate}>
                        <p>{formattedDateTime}</p>
                      </div>
                      <div className={style.eventType}>
                        <p>{card?.type?.name} Event</p>
                      </div>
                    </div>
                  </div>

                  <div className={style.totalTicket}>
                    <div className={style.titleTicket}>
                      <h6>Total Ticket</h6>
                    </div>
                    <div
                      className={style.quantityControls}
                      style={{ display: "flex" }}
                    >
                      <button onClick={handleDecrement}>-</button>
                      <p className={style.price}>{quantity}</p>
                      <button onClick={handleIncrement}>+</button>
                    </div>
                  </div>

                  <div className={style.totalTicket}>
                    <div className={style.titleTicket}>
                      <h6>Sub Total</h6>
                    </div>

                    <div className={style.priceAbout}>
                      <p className={style.price}>$50.00</p>
                    </div>
                  </div>

                  <div style={{ padding: "0 12px" }}>
                    <div
                      style={{
                        borderBottom: "2px solid #e3e3e3",
                        marginBottom: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    className={style.totalTicket}
                    style={{ marginBottom: "40px" }}
                  >
                    <div className={style.titleTicket}>
                      <h6> Total</h6>
                    </div>
                    <div className={style.priceAbout}>
                      <p className={style.priceTotal}>AUD $50.00</p>
                    </div>
                  </div>

                  <div className={style.ticketAbout}>
                    <div className={style.couponCode}>
                      <p>Coupon Code*</p>
                      <div className={style.couponInput}>
                        <input
                          type="text"
                          placeholder="Code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button type="submit">Apply</button>
                      </div>
                    </div>
                    <div className={style.bookNowBtn}>
                      <button onClick={handleSubmit} disabled={isSubmitting}>
                        Confirm & Pay
                      </button>
                    </div>
                    <div className={style.footer}>
                      <p>Price is inclusive of all applicable GST</p>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #e3e3e3",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #e3e3e3",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      padding: "12px",
                      marginBottom: "10px",
                    }}
                  >
                    Total Payable Amount : AUD $50.00
                  </Typography>
                </div>
                <br />
                <FormControl
                  variant="standard"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    // alignItems: "center",
                    marginTop: "16px",
                    padding: "0px 25px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid
                      xs={12}
                      style={{ paddingRight: "10px", marginBottom: "20px" }}
                    >
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        Card number*
                      </Typography>
                      <TextField
                        variant="outlined"
                        // name="email"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          backgroundColor: "#f9f9f9",
                        }}
                      />
                    </Grid>
                    <Grid
                      xs={12}
                      md={6}
                      style={{ paddingRight: "10px", marginBottom: "20px" }}
                    >
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        Expiry date*
                      </Typography>
                      <TextField
                        variant="outlined"
                        // name="email"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          backgroundColor: "#f9f9f9",
                        }}
                      />
                    </Grid>{" "}
                    <Grid
                      xs={12}
                      md={6}
                      style={{ paddingRight: "10px", marginBottom: "20px" }}
                    >
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h6"
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          marginBottom: "5px",
                        }}
                      >
                        CVV*
                      </Typography>
                      <TextField
                        variant="outlined"
                        // name="email"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        error={!!errors.cvv}
                        helperText={errors.cvv}
                        style={{
                          marginBottom: "8px",
                          width: "100%",
                          backgroundColor: "#f9f9f9",
                        }}
                      />
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
}

export default BookNow;
