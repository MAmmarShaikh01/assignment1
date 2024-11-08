import React from 'react';
import styles from './Contact.module.css';


const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out.</p>
        
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="Your Email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        
        <div className={styles.socials}>
          <p>Connect with us:</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
