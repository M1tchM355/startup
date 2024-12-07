import React from 'react';
import './box.css'
import { Recipe } from '../recipe/recipe.jsx';

export function Box() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/personalBox/'+localStorage.getItem('userName'))
      .then((response) => response.json())
      .then((recipes) => {
        setRecipes(recipes);
      })
  }, [])

  return (
    <main>
      <h1>My Recipe Box</h1>
      {recipes.length === 0 ? (
        <p className="no-recipes-message">You have no saved recipes.</p>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              recipe={recipe}
              displayButton={false}
            />
          ))}
        </div>
      )}
    </main>
  );
}
