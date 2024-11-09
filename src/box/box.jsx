import React from 'react';
import './box.css'
import { NavLink } from 'react-router-dom'

export function Box() {
  return (
    <main>
      <h1>My Recipe Box</h1>
      <section className="recipe-card">
        <h3>Recipe 1</h3>
        <p>5 stars, 1 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>
        <NavLink to="recipe">See full recipe</NavLink>
      </section>
      <section className="recipe-card">
        <h3>Recipe 2</h3>
        <p>4 stars, 1 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>
        <a href="recipe.html">See full recipe</a>
      </section>
      <section className="recipe-card">
        <h3>Recipe 3</h3>
        <p>4 stars, 0 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>        
        <a href="recipe.html">See full recipe</a>
      </section>
      <section className="recipe-card">
        <h3>Recipe 4</h3>
        <p>3 stars, 0 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>        
        <a href="recipe.html">See full recipe</a>
      </section>
    </main>
  );
}