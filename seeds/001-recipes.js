
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Recipe 1'},
        { recipe_name: 'Recipe 2'},
        { recipe_name: 'Recipe 3'}
      ]);
    });
};
