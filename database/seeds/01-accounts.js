
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, name: 'Shanda', email: 'shanda@email.com', password: 'test'},
        {id: 2, name: 'Tama', email: 'tama@email.com', password: 'dog'},
        {id: 3, name: 'Finn', email: 'finn@email.com', password: 'cat'},
      ]);
    });
};
