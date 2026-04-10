import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User List</h2>

        <div style={styles.list}>
          {users.map((user) => (
            <Link
              key={user.id}
              to={`/user/${user.id}`}
              style={styles.link}
            >
              {user.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",   // 🔥 change from center
    minHeight: "100vh",
    paddingTop: "100px",        // 🔥 push below navbar
    background: "linear-gradient(to right, #e0f2fe, #f0f9ff)",
  },
  card: {
    width: "320px",
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
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  link: {
    padding: "12px",
    background: "#f1f5f9",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#111",
    textAlign: "center",
  },
};
export default UserList;