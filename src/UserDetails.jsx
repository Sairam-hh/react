import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Details</h2>

        <div style={styles.row}>
          <span style={styles.label}>Name:</span>
          <span>{user.name}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Email:</span>
          <span>{user.email}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Phone:</span>
          <span>{user.phone}</span>
        </div>

        <div style={styles.row}>
          <span style={styles.label}>Website:</span>
          <span>{user.website}</span>
        </div>

        <h3 style={styles.subHeading}>Address</h3>

        <div style={styles.addressBox}>
          <p>{user.address.street}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>

        <Link to="/user" style={styles.backBtn}>⬅ Back</Link>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #dbeafe, #f0f9ff)",
  },
  card: {
    width: "350px",
    padding: "25px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px",
    color: "#1e3a8a",
  },
  subHeading: {
    marginTop: "15px",
    color: "#2563eb",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },
  label: {
    fontWeight: "bold",
    color: "#374151",
  },
  addressBox: {
    marginTop: "10px",
    padding: "10px",
    background: "#f1f5f9",
    borderRadius: "8px",
  },
  backBtn: {
    display: "block",
    textAlign: "center",
    marginTop: "20px",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
};

export default UserDetails;