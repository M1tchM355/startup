import React from 'react';
import './box.css'
import { Recipe } from '../recipe/recipe.jsx';

export function Box() {
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/box')
      .then((response) => response.json())
      .then((recipes) => {
        setRecipes(recipes);
      })
  }, [])


  return (
    <main>
      <h1>My Recipe Box</h1>
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
