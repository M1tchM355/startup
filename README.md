# RecipeShare

## Specification Deliverable

### Elevator Pitch

Ever opened your fridge, stared at the random food items and wondered what to eat? RecipeShare is the answer! RecipeShare is an AI recipe generating and sharing app. Users generate a recipe based on inputted ingredients. After making the recipe, they rate it on a scale of 1 to 5, leave any comments they may have, and save it to their own personal recipe box if they wish. Every recipe is saved with its rating and comments on the community page, where anyone logged in can see it. Users are able to try out the recipes on the community page and add their own rating and comments.

### Key Features

- Secure login over HTTPS
- AI-supported recipe generation
- Ability to save recipes to personal recipe box
- 5 star rating system and comments for each recipe
- Community recipe box displayed in realtime

### Technologies Used

1. **HTML** - Uses correct HTML structure for application. Four HTML pages. One for login, one for generating a recipe, one for the personal recipe box, and one for the community recipe box. Hyperlinks between pages.
2. **CSS** - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
3. **JavaScript** - Provides login, recipe display, display other recipes, shows comments and ratings, backend endpoint calls.
4. **React** - 4 page application reactive to user's actions. Use react for routing between pages. Make and recycle recipe cards.
5. **Service** - Backend service with endpoints for:
    * Generating recipe (groq api)
    * Storing and sorting recipes with comments and rating
    * Retrieving community recipes status
6. **DB/Login** - Store users, recipes, ratings, and comments in database. Register and login users. Credentials securely stored in database. Can’t do anything unless authenticated.
7. **WebSocket** - As recipes are saved to community and users rate and comment on recipes, their inputs are broadcast to all other users.

### Initial Design

![Mock](RecipeShareLogin.png)
![Mock](RecipeShareNewRecipe.png)
![Mock](RecipeSharePersonal.png)
![Mock](RecipeShareCommunity.png)
![Mock](RecipeShareRecipe.png)

## HTML Deliverable

For this deliverable I built out the structure of my application using HTML.

- **HTML Pages** - 5 HTML pages including the login page, the new recipe generation page, the personal recipe box page, the community recipe box page, and the more info recipe page
- **Links** - The login page automatically links to the new recipe page. The submit rating button on the new recipe page automatically links to the personal recipe box page. The more info links on the personal and community recipe box pages link to the more info recipe page.
- **Text** - Placeholder text on the new recipe page for recipe, text for ingredients input, and recipes on personal recipe box, community recipe box, and recipe more info page.
- **3rd Party Services** - Placeholder recipe generation for call to 3rd party AI text generator. https://console.groq.com/docs/quickstart
- **Images** - Images of stars for the recipe rating system.
- **Login** - Input box and submit button for login. User ID is shown after logging in.
- **DB** - User ID, recipes, rating, and comments represent data pulled from the database.
- **Websocket** -  Recipes on the community page represent recieps shared by other users in real time.

## CSS Deliverable

For this deliverable I properly styled the application into its final appearance.

-  **Header, footer, and main content body**
-  **Navigation elements** - I made the navigation bar formatted nicely on the main pages
-  **Responsive to window resizing** - The app looks great on all window sizes and devices
-  **Application elements** - Used good contrast and whitespace/padding on all html pages, added borders to the recipe cards to make them look separate. Also added borders to the popup rating forms.
-  **Application text content** - Consistent fonts
-  **Application images** - Styled the stars in the buttons for recipe rating

## React Deliverable

For this deliverable I used JavaScript and React so that the application completely works for a single user. I also added placeholders for future technology.

-  **Bundled and transpiled** - done!
-  **Components** - Login, generating recipes, and viewing personal and community recipes are all components with mocks for WebSocket.
  -  **login** - When you enter a username and password and press login or create it takes you to the welcome page. If you click on the create new recipe button it takes you to the new recipe page.
  -  **public api** - When you input ingredients and notes and press generate, it will call an AI api to generate the recipe. Right now it just has a few random recipes it chooses from.
  -  **database** - When you generate a recipe, it adds it to the community and personal recipe boxes. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
  -  **WebSocket** - Community recipes are just stored in the local storage for now. This will be replaced with WebSocket messages later.
  -  **application logic** - Recipes are only added to the personal recipe box if the user chooses to.
-  **Router** - Routing between login, recipe, new, box, and community components.
-  **Hooks** - I use hooks to keep track of the current new recipe and the lists of recipes in each box (personal and community).

## Service deliverable

For this deliverable I added backend endpoints that gets user personal recipe boxes and the community boxes and posts recipes to both.

-  **Node.js/Express HTTP service** - done!
-  **Static middleware for frontend** - done!
-  **Calls to third party endpoints** - Calls to groqcloud api to create new recipes
-  **Backend service endpoints** - Placeholders for login that stores the current user on the server. Endpoints for recipe boxes.
-  **Frontend calls service endpoints** - I did this using the fetch function. The recipe component calls the post to personal box endpoint, the new component calls the post to community box endpoint, and box and community components call the get personal box and get community box endpoints respectively

## DB/Login deliverable

For this deliverable I save every recipe in the database under the community recipes and a list of personal recipes for each user.

- **MongoDB Atlas database created** - done!
- **Stores data in MongoDB** - done!
- **User registration** - Creates a new account in the database.
- **Existing user authentication and logout** - Authenticates user in the database.
- **Use MongoDB to store credentials** - Stores both user and their personal recipe box.
- **Restricts functionality** - You cannot create new recipes or access anything until you have logged in

## WebSocket deliverable

For this deliverable I used webSocket to alert users when other users created a new recipe.

-  **Backend listens for WebSocket connection** - done!
-  **Frontend makes WebSocket connection** - done!
-  **Data sent over WebSocket connection** - done!
-  **WebSocket data displayed** - When users generate a new recipe, a message is broadcast to all other users. It is displayed on the top left for 5 seconds
-  **Full Functionality** - Everything is fully functional!
