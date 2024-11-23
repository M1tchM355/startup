const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const recipeCollection = db.collection('communityRecipes');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(username) {
  return userCollection.findOne({ userName: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(userName, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    userName: userName,
    password: passwordHash,
    token: uuid.v4(),
    recipes: [],
  };
  await userCollection.insertOne(user);

  return user;
}

async function addPersonalRecipe(token, recipe) {
  await userCollection.updateOne(
    { token: token },
    { $push: { recipes: recipe } }
  );
}

async function addCommunityRecipe(recipe) {
  return recipeCollection.insertOne(recipe);
}

function getCommunityRecipes() {
  //const collection = db.collection('recipeCollection');
  const recipes = recipeCollection.find().toArray();
  return recipes;
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addPersonalRecipe,
  addCommunityRecipe,
  getCommunityRecipes
};
