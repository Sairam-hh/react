import { useState } from "react";

export default function ChatBox() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (inputValue.trim() === "") return;

    setMessages([...messages, inputValue.trim()]);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Mini Chat</h2>

      

      {/* Chat Container */}
      <div style={styles.chatContainer}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.button}>
          Send
        </button>
      </div>

      {/* Message List */}
      <div style={styles.messageList}>
        {messages.length === 0 ? (
          <p style={styles.empty}>No messages yet. Type something above!</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={styles.messageBubble}>
              {msg}
            </div>
          ))
        )}
      </div>

      
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "520px",
    margin: "2rem auto",
    fontFamily: "sans-serif",
    backgroundColor: "#c1b7b7",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 20px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "1.25rem",
    color: "#1a1a1a",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    
  },
  chatContainer: {
    display: "flex",
    gap: "8px",
    padding: "1rem",
    border: "1px solid #2c0404",
    borderRadius: "12px",
    backgroundColor: "skyblue",
  },
  input: {
    flex: 1,
    padding: "8px 12px",
    fontSize: "14px",
    border: "1px solid #7d2020",
    borderRadius: "8px",
    outline: "none",
    
  },
  button: {
    height:"60px",
    width:"60px",
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#3c373c",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    whiteSpace: "nowrap",
    
  },
  messageList: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    
  },
  messageBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#E1F5EE",
    color: "#085041",
    border: "1px solid #9FE1CB",
    borderRadius: "14px 14px 4px 14px",
    padding: "10px 14px",
    maxWidth: "80%",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  empty: {
    textAlign: "center",
    color: "#888",
    fontSize: "13px",
  },
};