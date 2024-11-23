import React from 'react';
import Button from 'react-bootstrap/Button';
import './new.css'
import { Recipe } from '../recipe/recipe.jsx';
import config from './apiConfig.json';

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
            "content": "You are a world-class AI recipe-creating assistant. Your job is to take the ingredients and instructions given to you and return a delicious recipe using the ingredients given. Please do not include a response other than the recipe. If there are no ingredients or special instructions given to you, just return a random recipe. Not all ingredients need to be used, and you can include some small ingredients like spices even if they are not provided. Include a title for the dish, number of servings, a list of ingredients and measurements, and detailed step-by-step instructions for cooking. Remember to keep the recipe simple and straightforward. Here is the list of ingredients:" + ingredients + ". And here are the special instructions:" + specifications
        }]
      })
    });
    const x = await apiReturn.json();
    const recipe = x.choices[0].message.content;
    return(recipe);
  }
  
  const handleGenerateClick = async (e) => {
    const ingredients = document.getElementById('ingredients').value
    const specifications = document.getElementById('specifications').value
    const newestRecipe = await getRecipe(ingredients, specifications);
    setNewRecipe(newestRecipe);
    //console.log("New Recipe Set:", newestRecipe);
    setShowNewRecipe(true);
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
        <section className="recipe-card">
          <p>{newRecipe}</p>
        {/* <Recipe 
          recipe={newRecipe}
        /> */}
        {/* <Button variant='primary' onClick={() => navigate('/recipe')}>
          See full recipe
        </Button> */}
        </section>
      )}
    </main>
  );
}
