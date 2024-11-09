import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { New } from './new/new';
import { Box } from './box/box';
import { Recipe } from './recipe/recipe';
import { Community } from './community/community';
import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='body'>
        <header className="container-fluid">
        <nav className="navbar fixed-top">
          <h1 className="navbar-brand">RecipeShare</h1>
          <ul className="navbar-nav">
            {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to="new">New Recipe</NavLink>
              </li>
            )}
            {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to="box">Recipe Box</NavLink>
              </li>
            )}
            {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to="community">Discover</NavLink>
              </li>
            )}
          </ul>
          {authState === AuthState.Authenticated && (
            <div className="user-info">
              <span>Welcome User 123456!</span>
              <NavLink to="">
                Log Out
              </NavLink>
            </div>
          )}
        </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login 
            username={userName} 
            authState={authState} 
            onAuthChange={(userName, authState) => {
              setAuthState(authState);
              setUserName(userName);
            }}/>} exact />
          <Route path='/new' element={<New />} />
          <Route path='/box' element={<Box />} />
          <Route path='/box/recipe' element={<Recipe />} />
          <Route path='/community' element={<Community />} />
          <Route path='/community/recipe' element={<Recipe />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

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

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}