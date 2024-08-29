import Cards from "../../../components/cards";
import style from "./index.module.css";

function ExploreEvents() {
  return (
    <>
      <div className={style.eventsPage}>
        <header className={style.eventsHeading}>
          <div className={style.headerForm}>
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
          </div>
        </header>
        <section className={style.exploreEventsSectionFilterAndCards}>
          <Cards />
        </section>
      </div>
    </>
  );
}

export default ExploreEvents;
