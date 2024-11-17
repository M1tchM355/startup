import React from 'react';

export function Recipe({ recipe }) {

  const handleAddToPersonal = () => {
    fetch('/api/box?userName='+localStorage.getItem('userName'), {
      method: 'post',
      body: JSON.stringify({'recipe': recipe}),
      headers: { 'content-type': 'application/json' }
    })
  };


  return (
    <main>
      <section className='recipe-card'>
        <p class='recipe'>{recipe}</p>
        <button type="button" onClick={handleAddToPersonal}>Add to personal box</button>
      </section>
    </main>
  );
}
