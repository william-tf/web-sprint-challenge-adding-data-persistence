
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, resource_id: 1, description: 'spray mirror with cleaner', notes: 'you will spray your eyes out!', completed: false},
        {project_id: 1, resource_id: 2, description: 'wipe the spray off mirror', notes: 'test', completed: false},
        {project_id: 2, resource_id: 1, description: 'spray counter with cleaner', notes: 'test', completed: false},
        {project_id: 2, resource_id: 2, description: 'wipe down counter with paper towel', notes: 'dont. sweat. on. counter.', completed: false},
        {project_id: 3, resource_id: 1, description: 'spray down le window', notes: 'test', completed: false},
        {project_id: 3, resource_id: 2, description: 'wipe off cleaner from window', notes: 'make sure no streaks', completed: false}
      ]);
    });
};



