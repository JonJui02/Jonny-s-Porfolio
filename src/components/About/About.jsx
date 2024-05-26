import React, { useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const aboutItems = document.querySelectorAll(`.${styles.aboutItem}`);
      aboutItems.forEach((item, index) => {
        if (isElementInViewport(item)) {
          item.classList.add(styles.slideIn);
        }
      });

      const aboutItemTexts = document.querySelectorAll(
        `.${styles.aboutItemText}`
      );
      aboutItemTexts.forEach((item, index) => {
        if (isElementInViewport(item)) {
          item.classList.add(styles.slideIn);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/PPImage.jpg")}
          alt="JJ's picture here"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={`${styles.aboutItemText} ${styles.slideIn}`}>
              <h3>Frontend Development</h3>
              <p>
                I have prior experience in front-end developments such as
                building responsive and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={`${styles.aboutItemText} ${styles.slideIn}`}>
              <h3>Backend Development</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={`${styles.aboutItemText} ${styles.slideIn}`}>
              <h3>UI/UX Designer</h3>
              <p>
                I have done several designing task, made multiple landing pages
                and worked with wireframing and prototyping
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
