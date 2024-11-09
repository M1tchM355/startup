import React from 'react';
import Button from 'react-bootstrap/Button';
import './new.css'
import { Recipe } from '../recipe/recipe.jsx';

export function New() {
  const [showNewRecipe, setShowNewRecipe] = React.useState(false);
  const [recipeData, setRecipeData] = React.useState([]);
  const [newRecipe, setNewRecipe] = React.useState([]);

  //this is a helper function to generate random text for the recipes. this will change once I implement the AI API
  const generateRandomText = () => {
    const titles = ["Delicious Pancakes", "Spaghetti Bolognese", "Veggie Stir-Fry", "Homemade Pizza"];
    const descriptions = [
      "A quick and easy recipe to make at home.",
      "A family favorite with lots of flavor.",
      "Packed with fresh vegetables and taste.",
      "Perfect for a cozy night in."
    ];
    const reviews = ['0 stars, no comments', '2 stars, 3 comments', '5 stars, 10 comments'];
    const randomID = Math.floor(Math.random() * 100);
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    const randomIngredients = ["Flour", "Sugar", "Salt", "Eggs", "Milk", "Butter"];
    const randomDirections = 'Mix the ingredients together!';
    const randomReviews = reviews[Math.floor(Math.random() * reviews.length)];
    return { title: randomTitle, description: randomDescription, ingredients: randomIngredients, directions: randomDirections, reviews: randomReviews, recipeID: randomID};
  };

  const handleGenerateClick = (e) => {
    e.preventDefault();
    setShowNewRecipe(true);
    setNewRecipe(generateRandomText());
    setRecipeData([...recipeData, newRecipe]);
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    localStorage.setItem("recipes", JSON.stringify([...storedRecipes, newRecipe]));
  };

  return (
    <main className="container-fluid">
      <h1>New Recipe</h1>
        <section className="generate">
          <form>
            <div>
              <p>What ingredients do you want the recipe to include?</p>
              <input type="textarea" id="ingredients" placeholder="Type ingredients here" />
            </div>
            <div>
              <p>Any other specifications?</p>
              <input type="textarea" id="specifications" placeholder="Breakfast, snack, healthy, quick, etc" />
            </div>
            <button type="submit" onClick={handleGenerateClick}>Generate!</button>
          </form>
        </section>
      {showNewRecipe && (
        <section className='new-recipe'>
          <section className="recipe-card">
        <Recipe 
          title={newRecipe.title}
          description={newRecipe.description}
          ingredients={newRecipe.ingredients}
          directions={newRecipe.directions}
          reviews={newRecipe.reviews}
          recipeID={newRecipe.recipeID}
        />
        {/* <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button> */}
          </section>
        </section>
      )}
    </main>
  );
}
