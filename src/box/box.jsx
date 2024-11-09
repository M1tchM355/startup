import React from 'react';
import './box.css'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Recipe } from '../recipe/recipe.jsx';

export function Box() {
  const [recipes, setRecipes] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const recipesText = localStorage.getItem('recipes');
    if (recipesText) {
      setRecipes(JSON.parse(recipesText));
    }
  })

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
      <h1>My Recipe Box</h1>
      <section className="recipe-card">
        <Recipe 
          title={recipe1.title}
          description={recipe1.description}
          ingredients={recipe1.ingredients}
          directions={recipe1.directions}
          reviews={recipe1.reviews}
          recipeID={recipe1.recipeID}
        />
        <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button>
      </section>
      <section className="recipe-card">
        <h3>Recipe 2</h3>
        <p>4 stars, 1 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>
        <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button>
      </section>
      <section className="recipe-card">
        <h3>Recipe 3</h3>
        <p>4 stars, 0 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>        
        <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button>
      </section>
      <section className="recipe-card">
        <h3>Recipe 4</h3>
        <p>3 stars, 0 comment(s)</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam condimentum ligula vel auctor. Morbi sit amet neque hendrerit, posuere mi in, mollis leo. Aliquam tempor lacus ut dignissim lobortis...</p>        
        <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button>
      </section>
    </main>
  );
}
