import React from 'react';
import '../box/box.css'
import { NavLink } from 'react-router-dom'
import { Recipe } from '../recipe/recipe.jsx';

export function Community() {
  const recipe1 = {
    title: 'Cookies',
    description: 'Yummy chocolate chip cookies',
    ingredients: ['2 cups flour', '1 cup sugar', '1 cup chocolate chips', '1 tsp baking soda', '1/2 cup butter'],
    directions: 'Mix the ingredients together and bake at 375 for 10 minutes!',
    reviews: '5 stars, 3 comments',
    recipeID: 1
  }

  return (
    <main>
      <h1>Community Recipe Box</h1>
      <section className="recipe-card">
        <Recipe 
          title={recipe1.title}
          description={recipe1.description}
          ingredients={recipe1.ingredients}
          directions={recipe1.directions}
          reviews={recipe1.reviews}
          recipeID={recipe1.recipeID}
        />
        {/* <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button> */}
      </section>
      <section className="recipe-card">
        <Recipe 
          title={recipe1.title}
          description={recipe1.description}
          ingredients={recipe1.ingredients}
          directions={recipe1.directions}
          reviews={recipe1.reviews}
          recipeID={recipe1.recipeID}
        />
        {/* <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button> */}
      </section>
      <section className="recipe-card">
        <Recipe 
          title={recipe1.title}
          description={recipe1.description}
          ingredients={recipe1.ingredients}
          directions={recipe1.directions}
          reviews={recipe1.reviews}
          recipeID={recipe1.recipeID}
        />
        {/* <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button> */}
      </section>
      <section className="recipe-card">
        <Recipe 
          title={recipe1.title}
          description={recipe1.description}
          ingredients={recipe1.ingredients}
          directions={recipe1.directions}
          reviews={recipe1.reviews}
          recipeID={recipe1.recipeID}
        />
        {/* <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button> */}
      </section>
    </main>
  );
}
