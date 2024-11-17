import React from 'react';

export function Recipe({ title, description, ingredients, directions, recipe }) {

  const handleAddToPersonal = () => {
    fetch('/api/personalBox', {
      method: 'post',
      body: JSON.stringify(recipe),
      headers: { 'content-type': 'application/json' }
    })
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
