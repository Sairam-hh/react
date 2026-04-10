import React from 'react'

const styles = {
  hero: {
    background: "#eeedfe",
    borderRadius: "10px",
    padding: "2rem",
    textAlign: "center",
  },
  h1: {
    fontSize: "22px",
    color: "#26215c",
    marginBottom: "8px",
  },
  p: {
    fontSize: "14px",
    color: "#534ab7",
    marginBottom: "1rem",
  },
  btn: {
    background: "#534ab7",
    color: "#fff",
    border: "none",
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
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

export default function Home() {
  return (
    <div>
      <div style={styles.hero}>
        <h1 style={styles.h1}>Welcome to MyApp</h1>
        <p style={styles.p}>We build fast and beautiful digital products.</p>
        <button style={styles.btn}>Get started</button>
      </div>
      <div style={styles.cards}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Fast</h3>
          <p style={styles.cardText}>Delivered on time.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Secure</h3>
          <p style={styles.cardText}>Built with security.</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Quality</h3>
          <p style={styles.cardText}>High standard work.</p>
        </div>
      </div>
    </div>
  );
}

;