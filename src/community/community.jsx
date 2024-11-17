import React from 'react';
import '../box/box.css'
import { NavLink } from 'react-router-dom'
import { Recipe } from '../recipe/recipe.jsx';

export function Community() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/community')
      .then((response) => response.json())
      .then((recipes) => {
        setRecipes(recipes);
      })
  }, [])

  return (
    <main>
      <h1>Community Recipe Box</h1>
      <div className='recipe-list'>
        {recipes.map((recipe,index) => (
          <Recipe
            key={index}
            title={recipe.title}
            desription={recipe.description}
            ingredients={recipe.ingredients}
            directions={recipe.directions}
            recipe={recipe}
            />
        ))}
      </div>
    </main>
  );
}
