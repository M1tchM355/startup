import React from 'react';
import './recipe.css'

export function Recipe({ recipe, displayButton }) {
  const [showButton, setShowButton] = React.useState(displayButton);
  const [showFullRecipe, setShowFullRecipe] = React.useState(false);

  const handleAddToPersonal = () => {
    //setInPersonalBox(true);
    fetch('/api/personalBox/'+localStorage.getItem('userName'), {
      method: 'post',
      body: JSON.stringify({'recipe': recipe}),
      headers: { 'content-type': 'application/json' }
    })
    setShowButton(false);
  };

  const handleToggleShowRecipe = () => {
    setShowFullRecipe(!showFullRecipe);
  };

  const recipeString = recipe;
  const [title, servings, description, ...rest] = recipeString.split('\n\n');

  // Find indices for ingredients and instructions
  const ingredientsStart = rest.findIndex((section) => section.startsWith('**Ingredients**')) + 1;
  const instructionsStart = rest.findIndex((section) => section.startsWith('**Instructions**')) + 1;

  // Extract ingredients and instructions
  const ingredients = ingredientsStart !== -1 
    ? rest[ingredientsStart]?.split('\n')
        .filter(line => line.trim().startsWith('*'))
        .map(line => line.trim().substring(2)) // Remove '* ' at the start of each line
    : [];

  const instructions = instructionsStart !== -1 
    ? rest[instructionsStart]?.split('\n')
        .filter(line => line.trim().match(/^\d+\./)) // Match lines starting with numbers
        .map(line => line.trim().replace(/^\d+\.\s*/, '')) // Remove numbers and clean up whitespace
    : [];

  const cleanDescription = description?.replace(/^description:\s*/, '');
  
  return (
    <main>
      <section className='recipe-card'>
        <h2 className='recipe-title'>{title.replace(/\*\*/g, '')}</h2>
        <h3 className='recipe-servings'>{servings.replace(/\*\*/g, '')}</h3>
        <p>{cleanDescription}</p>
        {showFullRecipe && (
          <>
            <h4>Ingredients:</h4>
            <ul className='recipe-ingredients'>
              {ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>Instructions:</h4>
            <ol className='recipe-instructions'>
              {instructions?.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol> 
          </>
        )}
        {showButton && (
          <button type="button" onClick={handleAddToPersonal} className="add-to-personal-btn">Add to personal box</button>
        )}
        <button type="button" onClick={handleToggleShowRecipe} className="show-recipe-toggle">
          {showFullRecipe ? 'Show Less' : 'Show More'}
        </button>
      </section>
    </main>
  );

};
