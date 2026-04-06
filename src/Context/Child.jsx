import { useContext } from 'react';
import { ThemeContext } from './Parent';

 export default function Child() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDark = theme === 'dark';

  return (
    <div className={`container1 ${theme}`}>
      <div style={styles.avatar}>SB</div>
      <h2 style={{color:isDark?"green":"purple"}}>Sairam Banti</h2>
      <p style={{color:isDark?"orange":"green"}}>React Developer</p>
      <button onClick={toggleTheme} >
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </button>
    </div>
  );
  
}


const styles={
    avatar: { 
        width: "72px", 
        height: "72px", 
        borderRadius: "50%",
         display: "flex",
          alignItems: "center",
           justifyContent: "center",
            fontSize: "24px",
          margin: "0 auto 1rem",
           background: "skyblue",
            color: "white", 
        }

    }

