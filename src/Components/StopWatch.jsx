import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n) => String(n).padStart(2, "0");
  const timeString = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>⏱ Stopwatch</h2>

        <div style={styles.timeBox}>
          <span style={{ ...styles.time, color: "pink" }}>{timeString}</span>
          <p style={styles.label}>HH : MM : SS</p>
        </div>

        <div style={styles.buttons}>
          <button style={{ ...styles.btn, ...styles.start }} onClick={handleStart} disabled={isRunning}>
            Start
          </button>
          <button style={{ ...styles.btn, ...styles.stop }} onClick={handleStop} disabled={!isRunning}>
            Stop
          </button>
          <button style={{ ...styles.btn, ...styles.reset }} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f0f4f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "40px 50px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    textAlign: "center",
    width: "340px",
  },
  title: {
    fontSize: "22px",
    marginBottom: "28px",
    color: "#333",
  },
  timeBox: {
    background: "#1e1e2e",
    borderRadius: "12px",
    padding: "24px 20px",
    marginBottom: "30px",
  },
  time: {
    fontSize: "52px",
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: "4px",
    display: "block",
    fontFamily: "monospace",
  },
  label: {
    color: "rgba(255,255,255,0.4)",
    fontSize: "12px",
    marginTop: "8px",
    letterSpacing: "6px",
  },
  buttons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },
  btn: {
    padding: "12px 20px",
    fontSize: "15px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    flex: 1,
  },
  start: { background: "#22c55e", color: "#fff" },
  stop:  { background: "#ef4444", color: "#fff" },
  reset: { background: "#6b7280", color: "#fff" },
};