import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <h1><span>C</span>o<span>d</span>e-<span>B</span>a<span>b</span>a</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <a className="navbar-brand" href="menu">Menu</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="code-baba.com">Courses</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="blog.com">Blogs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="code-bba/user">Profile</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Header;