import React from 'react'



const styles = {
  container: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "400px",
    background: "#1a93d9",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  header: {
    background: "linear-gradient(135deg, #6a0dad, #9b59b6)",
    padding: "2rem 1rem",
    textAlign: "center",
    color: "#fff",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#0e727f",
    margin: "0 auto 10px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    fontWeight: "600",
  },
  name: {
    fontSize: "18px",
    fontWeight: "600",
  },
  email: {
    fontSize: "13px",
    opacity: 0.9,
  },
  body: {
    padding: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
  },
  item: {
    background: "whitesmoke",
    padding: "10px",
    borderRadius: "8px",
  },
  label: {
    fontSize: "12px",
    color: "#777",
  },
  value: {
    fontSize: "14px",
    fontWeight: "500",
  },
  button: {
    marginTop: "1.5rem",
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#6a0dad",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default function Profile() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.avatar}>SB</div>
          <div style={styles.name}>Sairam Banti</div>
          <div style={styles.email}>sairambanti41@gmail.com</div>
        </div>

        {/* Body */}
        <div style={styles.body}>
          <div style={styles.grid}>
            <div style={styles.item}>
              <div style={styles.label}>Phone</div>
              <div style={styles.value}>+91 7995358828</div>
            </div>

            <div style={styles.item}>
              <div style={styles.label}>Location</div>
              <div style={styles.value}>India</div>
            </div>

            <div style={styles.item}>
              <div style={styles.label}>Role</div>
              <div style={styles.value}>Frontend Developer</div>
            </div>

            <div style={styles.item}>
              <div style={styles.label}>Experience</div>
              <div style={styles.value}>2 Years</div>
            </div>
          </div>

          <button style={styles.button}>Edit Profile</button>
        </div>

      </div>
    </div>
  );
}

