
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient_name: 'Ingredient 1'},
        {recipe_id: 2, ingredient_name: 'Ingredient 2'},
        {recipe_id: 3, ingredient_name: 'Ingredient 3'},
        {recipe_id: 1, ingredient_name: 'Ingredient 44'},
        {recipe_id: 2, ingredient_name: 'Ingredient 554'},
        {recipe_id: 3, ingredient_name: 'Ingredient 573432'}
      ]);
    });
};
