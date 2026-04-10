import React from 'react'

// UiUxDevelopment.jsx

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "20px",
    color: "#6a1b9a",
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
    background: "#faf3ff",
    borderRadius: "10px",
    padding: "1rem",
    border: "1px solid #e6d6f5",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    color: "#8e24aa",
  },
  cardText: {
    fontSize: "13px",
    color: "#555",
  },
};

export default function UiUxDevelopment() {
    
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>UI/UX Development</h2>

      <p style={styles.description}>
        We design user-friendly and visually appealing interfaces that enhance
        user experience and engagement.
      </p>

      {/* Features */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>User Interface (UI)</div>
          <div style={styles.cardText}>
            Clean and modern designs with focus on usability.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>User Experience (UX)</div>
          <div style={styles.cardText}>
            Smooth navigation and intuitive user journeys.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Prototyping</div>
          <div style={styles.cardText}>
            Interactive prototypes using tools like Figma and Adobe XD.
          </div>
        </div>
      </div>
    </div>
  );
}

