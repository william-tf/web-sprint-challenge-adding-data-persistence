
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'clean mirror', description: 'spray & pray that mirror', completed: false},
        {name: 'clean counter', description: 'spray&pray that counter', completed: false },
        {name: 'clean window', description: 'test', completed: false }
      ]);
    });
};
