import React, { useState } from "react";
import style from "./index.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndexAttendess, setOpenIndexAttendess] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex == index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const toggleAccordionAttendess = (index) => {
    if (openIndexAttendess == index) {
      setOpenIndexAttendess(null);
    } else {
      setOpenIndexAttendess(index);
    }
  };

  return (
    <>
      <div className={style.faqPage}>
        <section className={style.headerHelp}>
          <div className={style.navigate}>
            <p>
              <Link to="/" className={style.home}>
                Home
              </Link>{" "}
              /{"   "}
              <Link to="help" className={style.faq}>
                Frequently asked questions{" "}
              </Link>
            </p>
          </div>
        </section>

        <section className={style.faqAndAnswerSection}>
          <div className={style.faqSection}>
            <div className={style.title}>
              <h1>Frequently asked questions</h1>
              <p>Find answers to the common questions asked about Barren.</p>
            </div>

            <div className={style.faqTitle}>
              <h2>FAQ for Organisers</h2>
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(0)}
            >
              <div className={style.accordionHeader}>
                <p>What types of events can I set up through Barren?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 0 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 0 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(1)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Does Barren offer event management or customer service for my
                  event?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 1 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 1 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(2)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Can my event’s page and my profile reflect my company’s
                  branding?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 2 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 2 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(3)}
            >
              <div className={style.accordionHeader}>
                <p>How soon you after my event should I expect to get paid?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 3 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 3 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(4)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Which platform will Barren use to host my online event and
                  will I have to pay any external charges for my online event?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 4 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 4 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(5)}
            >
              <div className={style.accordionHeader}>
                <p>Can I invite speakers to my online event?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 5 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 5 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(6)}
            >
              <div className={style.accordionHeader}>
                <p>Can I add multiple sessions to my online event?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 6 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 6 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(7)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Can I add in any special requirements at the time of booking?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 7 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 7 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(8)}
            >
              <div className={style.accordionHeader}>
                <p>Can I reserve my event for a selected group of people?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 8 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 8 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(9)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Can I limit the number of tickets available to each person?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 9 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 9 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(10)}
            >
              <div className={style.accordionHeader}>
                <p>What is the maximum number of people that I can host?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 10 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 10 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(11)}
            >
              <div className={style.accordionHeader}>
                <p>Can I easily share my event's page?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 11 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 11 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(12)}
            >
              <div className={style.accordionHeader}>
                <p>How do I know who has arrived at my venue event?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 12 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 12 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(13)}
            >
              <div className={style.accordionHeader}>
                <p>How do I edit my event after it has been published?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 13 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 13 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(14)}
            >
              <div className={style.accordionHeader}>
                <p>Does Barren charge for free events?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 14 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 14 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(15)}
            >
              <div className={style.accordionHeader}>
                <p>Can I change my subscription?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 15 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 15 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(16)}
            >
              <div className={style.accordionHeader}>
                <p>What payment options do you accept?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 16 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 16 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(17)}
            >
              <div className={style.accordionHeader}>
                <p>Where can I get a report of my event?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 17 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 17 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(18)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Can I arrange printed items such as tickets and programs
                  through Barren?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 18 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 18 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(19)}
            >
              <div className={style.accordionHeader}>
                <p>Do my customers need to make an account with Barren?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 19 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 19 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordion(20)}
            >
              <div className={style.accordionHeader}>
                <p>Where do I get help if I need it?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndex == 20 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndex == 20 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div style={{ marginBottom: "50px" }}></div>

            <div className={style.faqTitle}>
              <h2>FAQ for Attendees</h2>
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(0)}
            >
              <div className={style.accordionHeader}>
                <p>Will my details be shared with any third parties?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 0 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 0 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(1)}
            >
              <div className={style.accordionHeader}>
                <p>Do I need an account to buy tickets from Barren?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 1 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 1 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(2)}
            >
              <div className={style.accordionHeader}>
                <p>How do I buy tickets for an event?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 2 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 2 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(3)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Why can’t I purchase more than a certain amount of tickets?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 3 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 3 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(4)}
            >
              <div className={style.accordionHeader}>
                <p>
                  How do I inform my organiser of my special requirements for an
                  event?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 4 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 4 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(5)}
            >
              <div className={style.accordionHeader}>
                <p>When will I receive my tickets?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 5 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 5 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(6)}
            >
              <div className={style.accordionHeader}>
                <p>How will I join my online event?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 6 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 6 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(7)}
            >
              <div className={style.accordionHeader}>
                <p>
                  Where will I get the best experience out of my online event?
                </p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 7 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 7 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(8)}
            >
              <div className={style.accordionHeader}>
                <p>Do I need to print my tickets off?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 8 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 8 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(9)}
            >
              <div className={style.accordionHeader}>
                <p>Can I cancel or change my booking?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 9 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 9 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(10)}
            >
              <div className={style.accordionHeader}>
                <p>I have lost my tickets, can you resend them?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 10 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 10 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>

            <div
              className={style.accordionItem}
              onClick={() => toggleAccordionAttendess(11)}
            >
              <div className={style.accordionHeader}>
                <p>Where can I go to get some help?</p>
                <button>
                  <FontAwesomeIcon
                    icon={openIndexAttendess == 11 ? faMinus : faPlus}
                    className={style.icon}
                  />
                </button>
              </div>
              {openIndexAttendess == 11 && (
                <div className={style.accordionTitle}>
                  <div className={style.accordionTitleContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris quis auctor ex. Curabitur id odio in lectus molestie
                    porttitor ac vel turpis. Integer tincidunt non felis et
                    tincidunt. Duis eros leo, porta a felis vitae, facilisis
                    blandit felis. Cras auctor nisl ut sem bibendum, non auctor
                    magna ultrices. Etiam condimentum enim eu dui pharetra, eu
                    sagittis ante mollis. Integer porttitor ultricies bibendum.
                    Aenean mollis odio id ultrices pharetra. Quisque vitae mi
                    nec enim viverra pellentesque.
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FAQ;
