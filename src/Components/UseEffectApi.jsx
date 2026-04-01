import { useState, useEffect } from "react";

export default function UserTable() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [hover, setHover]     = useState(null);
  const [error, setError]     = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <p style={{ textAlign: "center", padding: "40px", fontSize: "46px", color: "skyblue" }}>
      ⏳ Loading...
    </p>
  );

  if (error) return (
    <p style={{ textAlign: "center", padding: "40px", fontSize: "46px", color: "red" }}>
      ❌ Error: {error}
    </p>
  );

  return (
    <div style={{
      maxWidth: "1000px",
      margin: "40px auto",
      padding: "0 20px",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* Title */}
      <h2 style={{
        fontSize: "22px",
        color: "#2c3e50",
        marginBottom: "16px",
        borderLeft: "4px solid #3498db",
        paddingLeft: "12px",
        fontWeight: "600"
      }}>
        Fetch Users Data From The API
      </h2>

      {/* Table */}
      <div style={{ overflowX: "auto", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <table border="1" cellPadding="8" style={{
          borderCollapse: "collapse",
          width: "100%",
          fontSize: "14px",
          border: "1px solid #ddd"
        }}>

          <thead>
            <tr style={{ background: "#3498db" }}>
              {["Name", "Email", "Phone", "Website", "Company"].map(col => (
                <th key={col} style={{
                  padding: "12px 16px",
                  color: "white",
                  textAlign: "left",
                  fontWeight: "600",
                  border: "1px solid #2980b9"
                }}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr key={user.id}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{
                  background: hover === i ? "#ebf5fb" : i % 2 === 0 ? "#ffffff" : "#f4f6f7",
                  transition: "background 0.2s",
                  cursor: "default"
                }}
              >
                <td style={{ padding: "11px 16px", border: "1px solid #ddd", fontWeight: "500", color: "#2c3e50" }}>
                  {user.name}
                </td>
                <td style={{ padding: "11px 16px", border: "1px solid #ddd", color: "#2980b9" }}>
                  {user.email}
                </td>
                <td style={{ padding: "11px 16px", border: "1px solid #ddd", color: "#555" }}>
                  {user.phone}
                </td>
                <td><a href={user.website} target="_blank" rel="noopener noreferrer" style={{ padding: "11px 16px", border: "1px solid #ddd", color: "#27ae60" }}>
                  {user.website}
                </a></td>
                <td style={{ padding: "11px 16px", border: "1px solid #ddd" }}>
                  <span style={{
                    background: "#eaf4fb",
                    border: "1px solid #aed6f1",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    fontSize: "12px",
                    color: "#1a5276"
                  }}>
                    {user.company.name}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Footer */}
      <p style={{ marginTop: "10px", fontSize: "13px", color: "#999", textAlign: "right" }}>
        ✅ {users.length} users loaded
      </p>
    </div>
  );
}