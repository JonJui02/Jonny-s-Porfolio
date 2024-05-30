import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import certifications from "../../data/certifications.json"; // Import certifications data
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <section className={styles.certifications} id="certifications">
        <h2 className={styles.title}>Certifications</h2>
        <div className={styles.certificationList}>
          {certifications.map((certification, id) => {
            return (
              <a
                key={id}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certificationLink}
              >
                <div className={styles.certification}>
                  <div className={styles.certificationImageContainer}>
                    <img
                      src={getImageUrl(certification.imageSrc)}
                      alt={certification.title}
                    />
                  </div>
                  <div className={styles.certificationDetails}>
                    <h3>{certification.title}</h3>
                    <p>{certification.issuingOrganization}</p>
                    <p>{certification.issueDate}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </section>
  );
};
