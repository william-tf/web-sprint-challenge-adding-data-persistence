
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'Johnson & Johnson cleaner', description: 'used to kill 99.9% bacteria'},
        {name: 'paper towel', description: 'test', }
      ]);
    });
};
