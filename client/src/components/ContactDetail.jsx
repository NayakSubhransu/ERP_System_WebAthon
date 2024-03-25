import React from 'react';
import styles from './ContactDetail.module.css';
const data = {
    name: 'Aditya Nayak',
    rollNo: '22XY1234',
    email: 'john@iitbbsac.in',
    phone: '9234567890',
    semester: '6',
    year: '3',
    parentName: 'Jane Nayak',
    parentPhone: '9876543210',
    address: '123 Main St, City, Country',
  };
const ContactDetail = () => {
  return (
    <div className={styles.contactDetail}>
      <h2>Contact Details</h2>
      <div className={styles.detailContainer}>
        <div>
          <span className={styles.detailLabel}>Name:</span>
          <span className={styles.detailValue}>{data.name}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Roll No:</span>
          <span className={styles.detailValue}>{data.rollNo}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Email:</span>
          <span className={styles.detailValue}>{data.email}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Phone Number:</span>
          <span className={styles.detailValue}>{data.phone}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Semester:</span>
          <span className={styles.detailValue}>{data.semester}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Year:</span>
          <span className={styles.detailValue}>{data.year}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Parent's Name:</span>
          <span className={styles.detailValue}>{data.parentName}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Parent's Phone Number:</span>
          <span className={styles.detailValue}>{data.parentPhone}</span>
        </div>
        <div>
          <span className={styles.detailLabel}>Address:</span>
          <span className={styles.detailValue}>{data.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
