import Cards from "../../../components/cards";
import style from "./index.module.css";

function ExploreEvents() {
  return (
    <>
      <div className={style.eventsPage}>
        <header className={style.eventsHeading}>
          <h1>Discover Events For All The Things You Love</h1>
        </header>
        <section className={style.exploreEventsSectionFilterAndCards}>
          <Cards />
        </section>
      </div>
    </>
  );
}

export default ExploreEvents;
