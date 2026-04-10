import React from 'react'


const styles = {
  container: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    background: "#f5f7fb",
  },
  card: {
    display: "flex",
    width: "800px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    background: "#fff",
  },
  left: {
    flex: 1,
    background: "linear-gradient(135deg, #1a73e8, #4facfe)",
    color: "#fff",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    padding: "2rem",
  },
  title: {
    fontSize: "22px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    opacity: 0.9,
  },
  infoBox: {
    marginTop: "1.5rem",
    fontSize: "13px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    outline: "none",
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    minHeight: "120px",
    resize: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#1a73e8",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Left Section */}
        <div style={styles.left}>
          <h2 style={styles.title}>Contact Us</h2>
          <p style={styles.subtitle}>
            Feel free to reach out. We’d love to hear from you!
          </p>

          <div style={styles.infoBox}>
            📧 sairambanti41@gmail.com <br />
            📞 +91 7995358828 <br />
            📍 India
          </div>
        </div>

        {/* Right Section (Form) */}
        <div style={styles.right}>
          <form style={styles.form}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <input type="text" placeholder="Subject" style={styles.input} />
            <textarea
              placeholder="Your Message"
              style={styles.textarea}
            ></textarea>

            <button style={styles.button}>Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

