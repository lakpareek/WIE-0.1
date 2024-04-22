import React from 'react';

function Header() {
  const headerStyle = {
    background: 'linear-gradient(to right, #4F46E5, #8C4BE5)',
    padding: '1rem',
    color: 'white',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  };

  const buttonStyle = {
    background: 'white',
    color: '#4F46E5',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div className="container mx-auto">
        <nav style={navStyle}>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: '1rem' }}>Hospital Finder</h1>
            <ul style={navLinksStyle}>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <button style={buttonStyle}>Login</button>
            <button style={{ ...buttonStyle, marginLeft: '0.5rem' }}>Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
