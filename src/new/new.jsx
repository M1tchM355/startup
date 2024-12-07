import React from 'react';
import './new.css'
import { Recipe } from '../recipe/recipe.jsx';
import config from './apiConfig.json';
import { RecipeEvent, RecipeNotifier } from '../recipeNotifier.js';

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
            "content": "You are a world-class AI recipe-creating assistant. Your job is to take the ingredients and instructions given to you and return a delicious recipe using the ingredients given. Please do not include a response other than the recipe. Not all ingredients need to be used, and you can include some small ingredients like spices even if they are not provided. Format it like this: **title**\n\n**servings**\n\ndescription\n\n**Ingredients**\n\n**Instructions**. Remember to keep the recipe simple and straightforward. Here is the list of ingredients:" + ingredients + ". And here are the special instructions:" + specifications
        }]
      })
    });
    const x = await apiReturn.json();
    const recipe = x.choices[0].message.content;
    return(recipe);
  }
  
  const handleGenerateClick = async (e) => {
    let ingredients = document.getElementById('ingredients').value
    if(ingredients === ''){
      ingredients = 'Choose any ingredients you want'
    }
    let specifications = document.getElementById('specifications').value
    if(specifications === ''){
      specifications = 'No specifications'
    }
    const newestRecipe = await getRecipe(ingredients, specifications);
    setNewRecipe(newestRecipe);
    //console.log("New Recipe Set:", newestRecipe);
    setShowNewRecipe(true);
    fetch('/api/community', {
      method: 'post',
      body: JSON.stringify({recipe: newestRecipe}),
      headers: { 'content-type': 'application/json' }
    })

    Recipe
    //let others know a new recipe was generated
    RecipeNotifier.broadcastEvent(localStorage.getItem('userName'), RecipeEvent.New, {});
  };

  return (
    <main className="container-fluid">
      <h1>New Recipe</h1>
      <p>Add ingredients to get started, or leave blank to generate a random recipe.</p>
        <section className="generate">
          <form>
            <div className="form-group">
              <label htmlFor="ingredients">What ingredients do you want the recipe to include?</label>
              <textarea id="ingredients" placeholder="Type ingredients here" rows="4" />
            </div>
            <div className="form-group">
              <label htmlFor="specifications">Any other specifications?</label>
              <textarea id="specifications" placeholder="Breakfast, snack, healthy, quick, etc" rows="4" />
            </div>
            <button type="button" className="generate-button" onClick={handleGenerateClick}>Generate!</button>
          </form>
        </section>
      {showNewRecipe && (
        <Recipe 
          recipe={newRecipe}
          displayButton={true}
        />
      )}
    </main>
  );
}
