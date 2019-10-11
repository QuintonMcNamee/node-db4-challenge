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

server.get('/api/recipes/:id', (req, res) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(recipe => {
        if(recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({ message: 'Could not find recipe with given id.' })
        } 
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get recipes' });
    });
});

server.get('/api/recipes/:id/ingredients', (req,res) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(ingredients => {
        res.json(ingredients);
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get ingredients.' });
    });
});

module.exports = server;