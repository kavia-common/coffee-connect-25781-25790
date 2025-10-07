import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { NavLink } from 'react-router-dom';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: '12px 16px' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <nav aria-label="Developer Navigation" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'var(--text-secondary)' : 'inherit' })}>Home</NavLink>
          <NavLink to="/order" style={({ isActive }) => ({ color: isActive ? 'var(--text-secondary)' : 'inherit' })}>Order</NavLink>
          <NavLink to="/detail-item" style={({ isActive }) => ({ color: isActive ? 'var(--text-secondary)' : 'inherit' })}>Detail Item</NavLink>
          <NavLink to="/delivery" style={({ isActive }) => ({ color: isActive ? 'var(--text-secondary)' : 'inherit' })}>Delivery</NavLink>
        </nav>
      </header>

      <main style={{ display: 'block', padding: '16px 0' }}>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
