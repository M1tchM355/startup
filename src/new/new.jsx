import React from 'react';
import Button from 'react-bootstrap/Button';
import './new.css'
import { Recipe } from '../recipe/recipe.jsx';
const config = require('./apiConfig.json');

export function New() {
  const [showNewRecipe, setShowNewRecipe] = React.useState(false);
  //const [recipeData, setRecipeData] = React.useState([]);
  const [newRecipe, setNewRecipe] = React.useState('');

  const getRecipe = async (ingredients, specifications) => {
    const auth = `Bearer ${config.key}`;
    const apiReturn = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
      body: JSON.stringify({
        "model": "llama3-8b-8192",
        "messages": [{
            "role": "user",
            "content": "You are a world-class AI recipe-creating assistant. Your job is to take the ingredients and instructions given to you and return a delicious recipe using the ingredients given. Please do not include a response other than the recipe. If there are no ingredients or special instructions, just make a random recipe. Not all ingredients need to be used, and you can include some small ingredients like spices even if they are provided. Include a title for the dish, a list of ingredients and measurements, and detailed step-by-step instructions for cooking. Remember to keep the recipe simple and straightforward. Here is the list of ingredients:" + ingredients + ". And here are the special instructions:" + specifications
        }]
      })
    });
    const x = await apiReturn.json();
    const recipe = x.choices[0].message.content;
    return(recipe);
  }
  

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

  const handleGenerateClick = async (e) => {
    const ingredients = document.getElementById('ingredients').value
    const specifications = document.getElementById('specifications').value
    setShowNewRecipe(true);
    const newestRecipe = await getRecipe(ingredients, specifications);
    setNewRecipe(newestRecipe);
    //setRecipeData([...recipeData, newRecipe]);
    fetch('/api/community', {
      method: 'post',
      body: JSON.stringify({recipe: newestRecipe}),
      headers: { 'content-type': 'application/json' }
    })
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
            <button type="button" onClick={handleGenerateClick}>Generate!</button>
          </form>
        </section>
      {showNewRecipe && (
        <section className='new-recipe'>
          <section className="recipe-card">
        <Recipe 
          recipe={newRecipe}
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
