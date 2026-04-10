import React from 'react'


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "20px",
    color: "#1b5e20",
    marginBottom: "5px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  cards: {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
    flexWrap: "wrap",
  },
  card: {
    flex: "1 1 150px",
    background: "#f1fff5",
    borderRadius: "10px",
    padding: "1rem",
    border: "1px solid #cdebd6",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    color: "#2e7d32",
  },
  cardText: {
    fontSize: "13px",
    color: "#555",
  },
};

export default function AppDevelopment() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>App Development</h2>

      <p style={styles.description}>
        We develop high-quality mobile applications for Android and iOS with
        smooth performance and great user experience.
      </p>

      {/* Features */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Android Apps</div>
          <div style={styles.cardText}>
            Native and hybrid Android apps using modern tools.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>iOS Apps</div>
          <div style={styles.cardText}>
            High-performance iOS applications with clean UI.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Cross Platform</div>
          <div style={styles.cardText}>
            Build apps using React Native / Flutter for both platforms.
          </div>
        </div>
      </div>
    </div>
  );
}

