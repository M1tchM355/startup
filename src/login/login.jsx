import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center">
      <div>
        <h1 className="intro">Welcome to RecipeShare!</h1>
        <h4>Log in or create an account to get started:</h4>
        <form method="get" action="new.html">
          <div className="input-group mb-3">
           <span className="input-group-text">@</span>
           <input className="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div className="input-group mb-3">
           <span className="input-group-text">🔒</span>
           <input className="form-control" type="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
         <button type="submit">Create</button>
        </form>
      </div>
    </main>
  );
}
