import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page!</p>
    </div>
  );
}

function User({ match }) {
  return (
    <div>
      <h1>User</h1>
      <p>User ID: {match.params.id}</p>
    </div>
  );
}

function App1() {
  return (
    <BrowserRouter>
      <>
        <nav className='App'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users/123">User 123</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/check" element={<div>Edit URL Page Manually</div>} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={User} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App1;
