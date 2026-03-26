import React from 'react'

export default function studentCard({student}) {
  return (
    <div style={{
      
      border: "2px solid #4a90e2",
      padding: "20px",
      margin: "10px",
      borderRadius: "10px",
      width: "180px",
      backgroundColor: "#f0f7ff",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      cursor:"pointer"
    }}>

        <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#4a90e2",
        color: "white",
        fontSize: "22px",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 12px"
      }}>
            {student.name.charAt(0)}

        </div>

        <p><strong>Name:</strong>{student.name}</p>
        <p><strong>Course:</strong>{student.course}</p>
        <span style={{
        padding: "4px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "bold",
        backgroundColor: student.isActive ? "#d4edda" : "#c9846d",
        color: student.isActive ? "#155724" : "#b4cfd9"
      }}>
        {student.isActive ? "✅ Active" : "❌ Inactive"}
      </span> 
        
    </div>
  )
}
