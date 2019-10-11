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
        .join('instructions', 'recipes.id', '=', 'instructions.recipe_id')
        .select(
            'instructions.id',
            'recipes.recipe_name',
            'instructions.ingredient_name'
        )
        .where('recipes.id', id);
}