import React from 'react';
import Button from 'react-bootstrap/Button';

export function Recipe({ title, description, ingredients, directions, reviews, recipeID }) {
  const [showPopup, setShowPopup] = React.useState(false);
  //const [showFullRecipe, setShowFullRecipe] = React.useState(false);

  const handleIMadeItClick = () => {
    setShowPopup(true);
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
        <p className='recipe-direction'>{directions}</p>
        <p className='recipe-reviews'>{reviews}</p>
        <button type="button" onClick={handleIMadeItClick}>I made it!</button>
      </section>
      {showPopup && (
        <section className="popup">
          <form method="get" action="box">
            <div className="stars">
              <p>Rating:</p>
              <Button variant='primary'>
                <img src='star.png' width="50" />
              </Button>
              <Button variant='primary'>
                <img src='star.png' width="50" />
              </Button>
              <Button variant='primary'>
                <img src='star.png' width="50" />
              </Button>
              <Button variant='primary'>
                <img src='star.png' width="50" />
              </Button>
              <Button variant='primary'>
                <img src='star.png' width="50" />
              </Button>
            </div>
            <div>
              <label htmlFor="comments">Comments: (optional)</label>
              <p><input type="textarea" id="comments" placeholder="Comments" /></p>
            </div>
            <div>
              <label htmlFor="save">Save to personal recipe box? </label>
              <input type="checkbox" id="save" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      )}
    </main>
  );
}
