import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { New } from './new/new';
import { Box } from './box/box';
import { Community } from './community/community';

export default function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <header className="container-fluid">
        <nav className="navbar fixed-top">
          <h1 className="navbar-brand">RecipeShare</h1>
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="new">New Recipe</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="box">Recipe Box</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="community">Discover</NavLink></li>
          </ul>
          <div className="user-info">
            <span>Welcome User 123456!</span>
            <NavLink to="">Log Out</NavLink>
          </div>
        </nav>
      </header>

        <main>App components go here</main>

        <footer>
          <div className="container-fluid">
            <span className="text-reset">Mitch Messerly</span>
            <a className='text-reset' href="https://github.com/M1tchM355/startup.git">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

