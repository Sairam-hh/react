import React from 'react'



const styles = {
  container: {
    padding: "2rem",
  },
  hero: {
    background: "#e1f5ee",
    borderRadius: "10px",
    padding: "2rem",
    textAlign: "center",
  },
  h1: {
    fontSize: "22px",
    color: "#085041",
    marginBottom: "8px",
  },
  p: {
    fontSize: "14px",
    color: "#0f6e56",
    marginBottom: "1rem",
  },
  cards: {
    display: "flex",
    gap: "1rem",
    marginTop: "1.5rem",
  },
  card: {
    flex: 1,
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "4px",
  },
  cardText: {
    fontSize: "13px",
    color: "#666",
  },
};

export default function About() {
  return (
    
    <div style={styles.container}>
      
    
      <div style={styles.hero}>
        <h1 style={styles.h1}>About Us</h1>
        <p style={styles.p}>We are a passionate team building great digital experiences.</p>
      </div>
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Our Mission</h3>
          <p style={styles.cardText}>Deliver quality products to clients worldwide.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Our Team</h3>
          <p style={styles.cardText}>12 skilled developers and designers.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Our Vision</h3>
          <p style={styles.cardText}>To be a globally trusted tech partner.</p>
        </div>
      </div>
    </div>
  );
}

