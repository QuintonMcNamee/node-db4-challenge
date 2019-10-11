const db = require('./data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipes')
        .where({ id })
        .first();
}

function getInstructions(id) {
    return db('recipes')
        .join('ingredients', 'recipes.id', '=', 'ingredients.recipe_id')
        .select(
            'ingredients.id',
            'recipes.recipe_name',
            'ingredients.ingredient_name'
        )
        .where('recipes.id', id);
}