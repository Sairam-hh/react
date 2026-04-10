import React from 'react'


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "20px",
    color: "#0a3d62",
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
    background: "#f4f9ff",
    borderRadius: "10px",
    padding: "1rem",
    border: "1px solid #dce7f5",
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "5px",
    color: "#1e5aa8",
  },
  cardText: {
    fontSize: "13px",
    color: "#555",
  },
};

export default function WebDevelopment() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Web Development</h2>

      <p style={styles.description}>
        We build fast, responsive, and scalable websites using modern technologies
        like React, Node.js, and more.
      </p>

      {/* Features */}
      <div style={styles.cards}>
        <div style={styles.card}>
          <div style={styles.cardTitle}>Frontend</div>
          <div style={styles.cardText}>
            Responsive UI using React, HTML, CSS, and JavaScript.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Backend</div>
          <div style={styles.cardText}>
            Secure APIs using Node.js, Express, and databases.
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.cardTitle}>Deployment</div>
          <div style={styles.cardText}>
            Hosting on cloud platforms with high performance.
          </div>
        </div>
      </div>
    </div>
  );
}

