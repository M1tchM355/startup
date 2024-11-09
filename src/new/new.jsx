import React from 'react';
import Button from 'react-bootstrap/Button';
import './new.css'

export function New() {
  const [showGenerate, setShowGenerate] = React.useState(true);
  const [showNewRecipe, setShowNewRecipe] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);

  const handleGenerateClick = (e) => {
    e.preventDefault();
    setShowNewRecipe(true);
  };

  const handleIMadeItClick = () => {
    setShowPopup(true);
  };

  return (
    <main className="container-fluid">
      <h1>New Recipe</h1>
      {showGenerate && (
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
      )}
      {showNewRecipe && (
        <section className='new-recipe'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar elit non ligula accumsan, vel tempus quam ultrices. In hac habitasse platea dictumst. Nunc ut sollicitudin lorem. Duis pretium, turpis in commodo imperdiet, enim quam pellentesque urna, ac aliquam urna mi eu erat. Aenean tempus, nisi id hendrerit convallis, ante nibh elementum urna, id eleifend sapien odio et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus convallis dapibus. Mauris nisl nisi, elementum id risus non, maximus iaculis sapien. Phasellus laoreet metus sit amet pharetra tincidunt. In arcu tellus, facilisis id faucibus id, scelerisque in massa. Aliquam nibh elit, tincidunt quis ipsum egestas, condimentum pellentesque quam.

            Proin id orci lacus. Ut mauris massa, facilisis id tincidunt ut, pulvinar eget eros. Aenean ultricies enim vel elit venenatis, in tempus nulla lacinia. In vel cursus augue. Vivamus euismod sapien ac mi ullamcorper, quis sagittis quam vehicula. Praesent sagittis vestibulum ante, sed efficitur velit pulvinar ut. Pellentesque in nibh metus. Etiam felis nisi, suscipit sed laoreet posuere, vestibulum eget mi. Duis tristique turpis nulla, eu tristique nulla eleifend vel. Donec sit amet congue tortor, vestibulum tincidunt tortor. Morbi vitae volutpat velit. Curabitur sodales dolor in neque sagittis gravida sed vitae velit. In vel turpis augue. Etiam ornare eros arcu, et consequat eros dignissim non. Quisque at pulvinar eros, non imperdiet ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            
            Duis semper risus sapien, eu dignissim ligula posuere eu. Donec nec libero a quam fermentum commodo. Maecenas eget congue enim. Mauris sed vehicula quam, ut sagittis nisi. Mauris vestibulum dignissim aliquam. Phasellus fringilla dui commodo maximus tempus. Sed in mi eros. Phasellus gravida magna metus, ut lacinia nisl vehicula non. Donec vitae quam quis leo mollis fringilla. Sed placerat ante ut urna convallis, in tempor metus tincidunt. Nam ullamcorper, magna a interdum congue, lorem nisi interdum orci, eleifend fringilla dolor tortor semper odio. Nunc quis sapien turpis. Proin sagittis nisi orci, sit amet lacinia metus consectetur nec. Cras urna lectus, accumsan a sagittis non, vulputate eu ligula. Integer iaculis accumsan interdum. Etiam ac porttitor tortor.</p>
          <p><button type="button" onClick={handleIMadeItClick}>I made it!</button></p>
        </section>
      )}
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
