import { Link, Outlet } from "react-router-dom";

const styles = {
  container: {
    padding: "2rem",
  },
  title: {
    fontSize: "22px",
    marginBottom: "1rem",
    color: "#0a3d62",
  },
  nav: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  link: {
    textDecoration: "none",
    padding: "8px 14px",
    background: "#eaf4ff",
    borderRadius: "8px",
    color: "#0a3d62",
    fontSize: "14px",
  },
  content: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1.5rem",
    background: "#fff",
  },
};

export default function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Our Services</h1>

      {/* Your Links */}
      <div style={styles.nav}>
        <Link to={"web-development"} style={styles.link}>
          Web Development
        </Link>
        <Link to={"app-development"} style={styles.link}>
          App Development
        </Link>
        <Link to={"ui-ux-development"} style={styles.link}>
          UI/UX Development
        </Link>
      </div>

      {/* Nested content */}
      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

