# RecipeShare

## Specification Deliverable

### Elevator Pitch
RecipeShare is a recipe generating and sharing app. Users generate a recipe based on available ingredients. After making the recipe, they rate it on a scale of 1 to 5, leave any comments they may have, and save it to their own personal recipe box if they wish. Every recipe is saved with its rating and comments on the community page, where anyone logged in can see it. Users are able to try out the recipes on the community page and add their own rating and comments.

### Key Features
- AI-supported recipe generation
- Ability to save recipes to personal recipe box
- 5 star rating system and comments for each recipe
- Community recipe box sorted by highest ratings

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
