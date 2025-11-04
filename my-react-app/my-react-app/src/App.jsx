import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#282c34',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Welcome to React! 🚀
      </h1>
      
      <div style={{
        padding: '2rem',
        backgroundColor: '#3a3f47',
        borderRadius: '10px',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          Count: {count}
        </p>
        
        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#61dafb',
            color: '#282c34',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Increment
        </button>
        
        <button
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#ff6b6b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
      
      <p style={{ marginTop: '2rem', color: '#61dafb' }}>
        Edit App.jsx and save to see changes!
      </p>
    </div>
  );
}