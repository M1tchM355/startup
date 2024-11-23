const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
  });

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.userName];
    if (user) {
        if (req.body.password === user.password) {
            user.token = uuid.v4();
            res.send({ token: user.token });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});

// GetCommunityRecipes
apiRouter.get('/community', (_req, res) => {
    res.send(communityBox);
});

// SubmitToCommunityBox
apiRouter.post('/community', (req, res) => {
    communityBox.unshift(req.body);
    res.send(communityBox);
});

// GetPersonalRecipes
apiRouter.get('/box', (req, res) => {
    const user = Object.values(users).find((u) => u.userName === req.query.userName);
    if (user) {
        res.send(user.recipes);
    }
});

//AddToPersonalBox
apiRouter.post('/box', (req, res) => {
    const user = Object.values(users).find((u) => u.userName === req.query.userName);
    if (user) {
        found = false;
        for (let i in user.recipes) {
            if (req.body.recipe === i) {
                found = true;
            }
        }
        if (!found) {
            user.recipes.unshift(req.body);
        }
        res.send(user.recipes);
    }
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});