import Cards from "../../../components/cards";
import style from "./index.module.css";

function ExploreEvents() {
  return ( 
    <>
      <div className={style.eventsPage}>
        <header className={style.eventsHeading}>
          <h1>Discover Events For All The Things You Love</h1>
          <div className={style.formDiv}>
            <form action="">
              <div className={style.selectEvents}>
                <select name="" id="" className={style.events}>
                  <option value="all">Browse All</option>
                  <option value="onlineEvent">Online Event</option>
                  <option value="VenueEvent">Venue Event</option>
                </select>
              </div>

              <div className={style.selectCategories}>
                <select name="" id="" className={style.categories}>
                  <option value="all"> All</option>

                  {/* <option value="">
                    <input type="text" name="" id="" />
                  </option> */}
                  <option value="all"> All</option>
                  <option value="art"> Art</option>
                  <option value="business"> Business</option>
                  <option value="coachingAndConsulting">
                    {" "}
                    Coaching and Consulting
                  </option>
                  <option value="communityAndCulture">
                    {" "}
                    Community and Culture
                  </option>
                  <option value="educationAndTraing">
                    {" "}
                    Education and Training
                  </option>
                  <option value="all"> Family and Friend</option>
                  <option value="all"> Fashion and Beuty</option>
                </select>
              </div>

              <div className={style.submitBtn}>
                <button className={style.findBtn} type="submit">
                  Find
                </button>
              </div>
            </form>
          </div>
        </header>
        <section className={style.exploreEventsSectionFilterAndCards}>
          <div className={style.filterAndCards}>
            <div className={style.timesBtn}>
              <button>All</button>
              <button>Today</button>
              <button>Tomorrow</button>
              <button>This Week</button>
              <button>This Weekend</button>
              <button>Next Week</button>
              <button>Next Weekend</button>
              <button>This Month</button>
              <button>Next Month</button>
              <button>This Year</button>
              <button>Next Year</button>
            </div>

            <div className={style.categoriyaBtns}>
              <button>All</button>
              <button>Arts</button>
              <button>Business</button>
              <button>Concertk</button>
              <button>Workshops</button>
              <button>Coaching and Consulting</button>
              <button>Health and Wellbeing </button>
              <button>Volunteer</button>
              <button>Sports</button>
              <button>Free</button>
            </div>

            <Cards />
          </div>
        </section>
      </div>
    </>
  );
}

export default ExploreEvents;
