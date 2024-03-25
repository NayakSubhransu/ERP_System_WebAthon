import React from "react";
import styles from "./PersonalInfo.module.css";

const PersonalInfo = () => {
  // Updated dummy data with additional details
  const student = {
    name: "Aditya Nayak",
    dob: "2000-07-22",
    nationality: "Indian",
    gender: "Male",
    rollNo: "21BE02007",
    semester: 1,
    courseDuration: "2021-2026",
    MotherTongue: "odia",
    LanguagesKnown: "English, Hindi, Odia",
  };

  return (
    <div className={styles.formContainer}>
      <form action="">
        <div className={styles.personalInfoBox}>
          <div className={styles.header}>
            <mark><h1>Personal Information</h1></mark>
          </div>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <label>Name:</label>
              <span>{student.name}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Date of Birth:</label>
              <span>{student.dob}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Nationality:</label>
              <span>{student.nationality}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Gender:</label>
              <span>{student.gender}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Roll No:</label>
              <span>{student.rollNo}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Semester:</label>
              <span>{student.semester}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Course Duration:</label>
              <span>{student.courseDuration}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Mother Tongue:</label>
              <span>{student.MotherTongue}</span>
            </div>
            <div className={styles.infoItem}>
              <label>Languages Known:</label>
              <span>{student.LanguagesKnown}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
