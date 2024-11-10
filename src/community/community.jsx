import React from 'react';
import '../box/box.css'
import { NavLink } from 'react-router-dom'
import { Recipe } from '../recipe/recipe.jsx';

export function Community() {
  const [recipes, setRecipes] = React.useState([]);
  
  React.useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  })

  return (
    <main>
      <h1>Community Recipe Box</h1>
      <div className='recipe-list'>
        {recipes.map((recipe,index) => (
          <Recipe
            recipeID={index}
            title={recipe.title}
            desription={recipe.description}
            ingredients={recipe.ingredients}
            reviews={recipe.reviews}
            />
        ))}
      </div>
    </main>
  );
}
