import React from 'react';

export function Recipe({ recipe }) {
  //const [inPersonalBox, setInPersonalBox] = React.useState(false);
  const handleAddToPersonal = () => {
    //setInPersonalBox(true);
    fetch('/api/personalBox/'+localStorage.getItem('userName'), {
      method: 'post',
      body: JSON.stringify({'recipe': recipe}),
      headers: { 'content-type': 'application/json' }
    })
  };

  const recipeString = recipe;
  const [title, servings, ...rest] = recipeString.split('\n\n');
  const ingredientsIndex = rest.findIndex((section) => section.startsWith('**Ingredients:**'))+1;
  //console.log(ingredientsIndex);
  const instructionsIndex = rest.findIndex((section) => section.startsWith('**Instructions:**'))+1;
  //console.log(instructionsIndex);
  //console.log(rest);

  const ingredients = rest[ingredientsIndex]
    ?.replace('**Ingredients:**', '')
    .split('\n')
    .filter((line) => line.trim().startsWith('*')) // Filter lines that start with '*'
    .map((line) => line.trim().substring(2)); // Remove '* ' at the start of each line

  const instructions = rest[instructionsIndex]
    ?.replace('**Instructions:**', '')
    .split('\n')
    .filter((line) => line.trim().match(/^\d+\./)) // Filter lines that start with numbers
    .map((line) => line.trim().substring(2)); // Clean up whitespace

  return (
    <main>
      <section className='recipe-card'>
        <h2 className='recipe-title'>{title.replace(/\*\*/g, '')}</h2>
        <h3 className='recipe-servings'>{servings.replace(/\*\*/g, '')}</h3>
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
        <button type="button" onClick={handleAddToPersonal}>Add to personal box</button>
      </section>
    </main>
  );

};
