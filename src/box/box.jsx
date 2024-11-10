import React from 'react';
import './box.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Recipe } from '../recipe/recipe.jsx';

export function Box() {
  const [recipes, setRecipes] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  })


  return (
    <main>
      <h1>My Recipe Box</h1>
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
