const express = require('express');

const db = require('./data/db-config.js');

const Recipes = require('./recipe-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ message: "Working!" });
});

server.get('/api/recipes', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
});

module.exports = server;