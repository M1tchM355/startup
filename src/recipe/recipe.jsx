import React from 'react';
import Button from 'react-bootstrap/Button';

export function Recipe({ title, description, ingredients, directions, recipeID, recipe }) {

  const handleAddToPersonal = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('personalRecipes'));
      if (storedRecipes.length > 0)
        localStorage.setItem('personalRecipes', JSON.stringify([recipe, ...storedRecipes]));
      else
        localStorage.setItem('personalRecipes', JSON.stringify([recipe]))
  };


  return (
    <main>
      <section className='recipe-card'>
        <h1 className='recipe-title'>{title}</h1>
        <p className='recipe-description'>{description}</p>
        <h3>Ingredients:</h3>
        <ul className="recipe-card-ingredients">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Directions:</h3>
        <p className='recipe-directions'>{directions}</p>
        <button type="button" onClick={handleAddToPersonal}>Add to personal box</button>
      </section>
    </main>
  );
}
