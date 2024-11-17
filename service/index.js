const express = require('express');
const uuid = require('uuid');
const app = express();

let users = {};
let communityBox = [];

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = { email: req.body.email, password: req.body.password, token: uuid.v4(), recipes: [] };
        users[user.email] = user;

        res.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
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
    communityBox = communityBox.unshift(req.body);
    res.send(communityBox);
});

// GetPersonalRecipes
apiRouter.get('/box', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        res.send(user.recipes);
    }
});

//AddToPersonalBox
apiRouter.post('/box', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
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