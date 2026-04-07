import React, { useReducer, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "",
  zip: "",
  dob: "",
  gender: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBack = () => {
    setSubmitted(false);
    dispatch({ type: "RESET" });
  };

  // Success Page
  if (submitted) {
    return (
      <div style={styles.container}>
        <div style={styles.successCard}>
          <h2 style={{ color: "green" }}>✅ Form Submitted Successfully!</h2>
          <p style={{ marginTop: "10px" }}>Thank you for filling the form.</p>

          <button onClick={handleBack} style={styles.submitBtn}>
            ⬅ Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Registration Form </h2>

        <div style={styles.grid}>
          {Object.keys(initialState).map((key) => (
            <div key={key} style={styles.inputGroup}>
              <label style={styles.label}>{key.toUpperCase()}</label>

              {key === "gender" ? (
                <select
                  name={key}
                  value={state[key]}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : (
                <input
                  type={key === "dob" ? "date" : "text"}
                  name={key}
                  value={state[key]}
                  onChange={handleChange}
                  style={styles.input}
                />
              )}
            </div>
          ))}
        </div>

        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
            style={styles.resetBtn}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
    fontFamily: "Arial",
  },
  form: {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    width: "100%",
    maxWidth: "700px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  submitBtn: {
    background: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  resetBtn: {
    background: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  successCard: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },
};
