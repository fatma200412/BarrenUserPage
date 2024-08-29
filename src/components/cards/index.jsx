import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};

const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

function Cards() {
  const [data, setData] = useState([]);
  const [eventCategory, setEventCategory] = useState("All");
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null);

  useEffect(() => {
    let apiEndPoint = "http://localhost:5011/api/Event/events";

    if (eventCategory && eventCategory !== "All") {
      apiEndPoint = `http://localhost:5011/api/Event/GetEventByCategoryId/${getCategoryId(
        eventCategory
      )}`;
    }

    axios(apiEndPoint)
      .then((res) => {
        console.log("API Response:", res.data);
        const result = res.data.result || res.data || [];
        const formattedData = result.map((item, index) => ({
          ...item,
          key: index, // Or use another unique identifier
        }));
        setData(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          setError(new Error("Unauthorized access. Please log in again."));
        } else {
          setError(err);
        }
        setLoading(false);
      });
    console.log("Event Type changed:", eventCategory);

    return () => {};
  }, [eventCategory]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data: {error.message}</p>;
  }

  const handleEventsCategoryAll = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("All"); // Fetch online events
  };

  const handleEventsCategoryArts = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Arts"); // Fetch online events
  };

  const handleEventsCategoryBusiness = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Business"); // Fetch online events
  };
  const handleEventsCategoryEducationandTraining = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Education and Training"); // Fetch online events
  };
  const handleEventsCategoryFamilyandFriends = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Family and Friends"); // Fetch online events
  };

  const handleEventsCategoryFoodandDrink = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Food and Drink"); // Fetch online events
  };

  const handleEventsCategoryGovernmentandPolitics = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Government and Politics"); // Fetch online events
  };

  const handleEventsCategoryHealthandWellbeing = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Health and Wellbeing"); // Fetch online events
  };

  const handleEventsCategoryHobbiesandInterest = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Hobbies and Interest"); // Fetch online events
  };
  const handleEventsCategoryMusicandTheater = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Music and Theater"); // Fetch online events
  };
  const handleEventsCategoryScienceandTechnology = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Science and Technology"); // Fetch online events
  };
  const handleEventsCategorySportsandFitnes = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Sports and Fitnes"); // Fetch online events
  };
  const handleEventsCategoryTravelandOutdoor = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Travel and Outdoor"); // Fetch online events
  };
  const handleEventsCategoryCommunityandCulture = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Community and Culture"); // Fetch online events
  };
  const handleEventsCategoryCoachingandConsulting = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Coaching and Consulting"); // Fetch online events
  };
  const handleEventsCategoryOthers = () => {
    console.log(eventCategory);
    console.log(data);
    setEventCategory("Others"); // Fetch online events
  };

  const getCategoryId = (categoryName) => {
    const categories = {
      "Arts": 1,
      "Business": 2,
      "Education and Training": 3,
      "Family and Friends": 4,
      "Food and Drink": 5,
      "Government and Politics": 6,
      "Health and Wellbeing": 7,
      "Hobbies and Interest": 8,
      "Music and Theater": 9,
      "Science and Technology": 10,
      "Sports and Fitness": 11,
      "Travel and Outdoor": 13,
      "Community and Culture": 14,
      "Coaching and Consulting": 15,
      "Others": 16,
    };

    return categories[categoryName] || "All";
  };

  return (
    <>
      <div className={style.cardSection}>
        <section className={style.exploreEventsSectionFilterAndCards}>
          <div className={style.filterAndCards}>
            <div className={style.title}>
              <h1>Explore Events</h1>
            </div>

            <div className={style.categoriyaBtns}>
              <button onClick={handleEventsCategoryAll}>All</button>
              <button onClick={handleEventsCategoryArts}>Arts</button>
              <button onClick={handleEventsCategoryBusiness}>Business</button>
              <button onClick={handleEventsCategoryEducationandTraining}>
                Education and Training
              </button>
              <button onClick={handleEventsCategoryFamilyandFriends}>
                Family and Friends
              </button>
              <button onClick={handleEventsCategoryFoodandDrink}>
                {" "}
                Food and Drink
              </button>
              <button onClick={handleEventsCategoryGovernmentandPolitics}>
                Government and Politics
              </button>
              <button onClick={handleEventsCategoryHealthandWellbeing}>
                Health and Wellbeing
              </button>
              <button onClick={handleEventsCategoryHobbiesandInterest}>
                Hobbies and Interest
              </button>
              <button onClick={handleEventsCategoryMusicandTheater}>
                Music and Theater
              </button>
              <button onClick={handleEventsCategoryScienceandTechnology}>
                Science and Technology
              </button>
              <button onClick={handleEventsCategorySportsandFitnes}>
                Sports and Fitnes
              </button>
              <button onClick={handleEventsCategoryTravelandOutdoor}>
                Travel and Outdoor
              </button>
              <button onClick={handleEventsCategoryCommunityandCulture}>
                Community and Culture
              </button>
              <button onClick={handleEventsCategoryCoachingandConsulting}>
                Coaching and Consulting
              </button>
              <button onClick={handleEventsCategoryOthers}>Others</button>
            </div>
          </div>
          <div className={style.cardsSection}>
            <Grid container spacing={5} style={{ marginBottom: "40px" }}>
              {data &&
                data.map((elem, i) => {
                  return (
                    <Grid key={i} xs={12} sm={6} md={4} lg={3}>
                      <Link to={"/cards/" + elem.id}>
                        <Card
                          sx={{
                            width: 285,
                            height: "100%",
                            position: "relative",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <CardMedia
                            sx={{ height: 200 }}
                            className={style.cardImg}
                            image={elem.image.imageUrl}
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
                              {elem.name}
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
                          <button
                            className={style.markBtn}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              console.log(elem.id);
                            }}
                          >
                            <FontAwesomeIcon icon={faBookmark} />
                          </button>
                          <div className={style.cardFooter}>
                            <p>
                              <FontAwesomeIcon icon={faCalendar} />{" "}
                              {`${formatDate(elem.eventDate)}`}
                            </p>

                            <p>
                              <FontAwesomeIcon icon={faClock} />{" "}
                              {formatDuration(elem.duration)}
                            </p>
                          </div>
                        </Card>
                      </Link>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
          <div className={style.cardSectionAllBtn}>
            <button> Browse All</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cards;
